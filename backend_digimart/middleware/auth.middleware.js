import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { createError } from '../utils/error.js';

export const authenticate = async (req, res, next) => {
    try {
        // Get token from header
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return next(createError(401, 'Authentication required'));
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        
        // Get user from token
        const user = await User.findById(decoded.id).select('-UserPassword');
        
        if (!user) {
            return next(createError(401, 'User not found'));
        }

        // Check if account is active
        if (user.AccountStatus !== 'active') {
            return next(createError(403, 'Account is not active'));
        }

        // Add user to request object
        req.user = user;
        next();
    } catch (error) {
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
        if (!roles.includes(req.user.UserRole)) {
            return next(createError(403, 'You do not have permission to perform this action'));
        }
        next();
    };
};

// Seller-specific middleware
export const isSeller = (req, res, next) => {
    if (req.user.UserRole !== 'Seller') {
        return next(createError(403, 'This action is only available for sellers'));
    }
    next();
};

// Buyer-specific middleware
export const isBuyer = (req, res, next) => {
    if (req.user.UserRole !== 'Buyer') {
        return next(createError(403, 'This action is only available for buyers'));
    }
    next();
}; 