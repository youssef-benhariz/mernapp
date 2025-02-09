const enum ErrorCode {
    AUTH_EMAIL_ALREADY_EXISTS = 'AUTH_EMAIL_ALREADY_EXISTS',
    AUTH_INVALID_TOKEN = 'AUTH_INVALID_TOKEN',
    AUTH_USER_NOT_FOUND = 'AUTH_USER_NOT_FOUND',
    AUTH_NOT_FOUND = 'AUTH_NOT_FOUND',
    AUTH_TOO_MANY_ATTEMPTS = 'AUTH_TOO_MANY_ATTEMPTS',
    AUTH_UNAUTHORIZED_ACCESS = 'AUTH_UNAUTHORIZED_ACCESS',
    AUTH_TOKEN_NOT_FOUND = 'AUTH_TOKEN_NOT_FOUND',
    //access control errors
    ACCESS_FORBIDEN = 'ACCESS_FORBIDEN',
    ACCESS_UNAUTHORIZED = 'ACCESS_UNAUTHORIZED',
    //validation and Resource errors
    VALIDATION_ERROR = 'VALIDATION_ERROR',
    RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
    //system errors
    INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
    VERICATION_ERROR = 'VERICATION_ERROR',
};
export {ErrorCode};