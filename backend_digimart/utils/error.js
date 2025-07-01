//1. Authentication & Authorization Exceptions (4xx)

// 401 - Authentication Required
export const createAuthenticationError = (message = 'Authentication required') => {
    const error = new Error(message);
    error.statusCode = 401;
    error.type = 'AuthenticationError';
    return error;
};

// 403 - Access Forbidden
export const createAuthorizationError = (message = 'Access denied') => {
    const error = new Error(message);
    error.statusCode = 403;
    error.type = 'AuthorizationError';
    return error;
};

// 401 - Invalid Credentials
export const createInvalidCredentialsError = (message = 'Invalid credentials') => {
    const error = new Error(message);
    error.statusCode = 401;
    error.type = 'InvalidCredentialsError';
    return error;
};

// 401 - Token Expired
export const createTokenExpiredError = (message = 'Token has expired') => {
    const error = new Error(message);
    error.statusCode = 401;
    error.type = 'TokenExpiredError';
    return error;

};

//2. Validation Exceptions (4xx)
// 400 - Bad Request / Validation
export const createValidationError = (message = 'Validation failed') => {
    const error = new Error(message);
    error.statusCode = 400;
    error.type = 'ValidationError';
    return error;
};

// 400 - Missing Required Fields
export const createMissingFieldError = (field) => {
    const error = new Error(`${field} is required`);
    error.statusCode = 400;
    error.type = 'MissingFieldError';
    return error;
};

// 400 - Invalid Format

export const createInvalidFormatError = (message = 'Invalid data format') => {
    const error = new Error(message);
    error.statusCode = 400;
    error.type = 'InvalidFormatError';
    return error;
};


// 3. Resource Exceptions (4xx)


// 404 - Resource Not Found
export const createNotFoundError = (resource = 'Resource') => {
    const error = new Error(`${resource} not found`);
    error.statusCode = 404;
    error.type = 'NotFoundError';
    return error;
};

// 409 - Resource Already Exists
export const createConflictError = (message = 'Resource already exists') => {
    const error = new Error(message);
    error.statusCode = 409;
    error.type = 'ConflictError';
    return error;
};

// 410 - Resource No Longer Available
export const createGoneError = (message = 'Resource no longer available') => {
    const error = new Error(message);
    error.statusCode = 410;
    error.type = 'GoneError';
    return error;
};


//4. User Role & Permission Exceptions (4xx)

// 403 - Seller Only Action
export const createSellerOnlyError = (message = 'This action is restricted to sellers') => {
    const error = new Error(message);
    error.statusCode = 403;
    error.type = 'SellerOnlyError';
    return error;
};

// 403 - Buyer Only Action
export const createBuyerOnlyError = (message = 'This action is restricted to buyers') => {
    const error = new Error(message);
    error.statusCode = 403;
    error.type = 'BuyerOnlyError';
    return error;
};

// 403 - Resource Owner Only
export const createOwnershipError = (message = 'You can only access your own resources') => {
    const error = new Error(message);
    error.statusCode = 403;
    error.type = 'OwnershipError';
    return error;
};