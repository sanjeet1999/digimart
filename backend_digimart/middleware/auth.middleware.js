import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { createError } from '../utils/error.js';
import logger from '../utils/logger.js';

export const authenticate = async (req, res, next) => {
    try {
        logger.info("Authentication middleware started");
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            logger.error("No token provided, authentication failed");
            return next(createError(401, 'Authentication required'));
        }
        logger.debug(`Token received: ${token}`);

        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        logger.debug(`Token decoded: ${JSON.stringify(decoded)}`);
        
        const user = await User.findById(decoded.id).select('-UserPassword');
        
        if (!user) {
            logger.error(`User not found for ID: ${decoded.id}`);
            return next(createError(401, 'User not found'));
        }
        logger.info(`User found: ${user.UserName}`);

        if (user.AccountStatus !== 'active') {
            logger.warn(`Account for user ${user.UserName} is not active`);
            return next(createError(403, 'Account is not active'));
        }
        logger.info(`User account is active`);

        req.user = user;
        logger.info("Authentication successful, user added to request");
        next();
    } catch (error) {
        logger.error({ err: error }, "Error during authentication");
        if (error.name === 'JsonWebTokenError') {
            return next(createError(401, 'Invalid token'));
        }
        if (error.name === 'TokenExpiredError') {
            return next(createError(401, 'Token expired'));
        }
        next(error);
    }
};

// Role-based authorization middleware
export const authorize = (...roles) => {
    return (req, res, next) => {
        logger.info(`Authorizing for roles: ${roles.join(', ')}`);
        logger.debug(`User role: ${req.user.UserRole}`);
        if (!roles.includes(req.user.UserRole)) {
            logger.warn(`User ${req.user.UserName} with role ${req.user.UserRole} is not authorized`);
            return next(createError(403, 'You do not have permission to perform this action'));
        }
        logger.info(`User ${req.user.UserName} authorized`);
        next();
    };
};

// Seller-specific middleware
export const isSeller = (req, res, next) => {
    logger.info("Checking for seller role");
    if (req.user.UserRole !== 'Seller') {
        logger.warn(`User ${req.user.UserName} is not a seller, authorization denied`);
        return next(createError(403, 'This action is only available for sellers'));
    }
    logger.info(`User ${req.user.UserName} is a seller, authorization granted`);
    next();
};

// Buyer-specific middleware
export const isBuyer = (req, res, next) => {
    logger.info("Checking for buyer role");
    if (req.user.UserRole !== 'Buyer') {
        logger.warn(`User ${req.user.UserName} is not a buyer, authorization denied`);
        return next(createError(403, 'This action is only available for buyers'));
    }
    logger.info(`User ${req.user.UserName} is a buyer, authorization granted`);
    next();
}; 