import { HTTPSTATUS,HttpStatusCode } from "../../config/http.config";
import { ErrorCode } from "../enums/error-code.enum";
export class AppError extends Error {
    public readonly statusCode: HttpStatusCode;
    public readonly errorCode?: ErrorCode;
    constructor(message: string, statusCode: HttpStatusCode=HTTPSTATUS.INTERNAL_SERVER_ERROR, errorCode?: ErrorCode) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        Error.captureStackTrace(this, this.constructor);
    }
    toJSON() {
        return {
            message: "An unexpected error occurred",
            statusCode: this.statusCode,
            errorCode: this.errorCode,
        };
    }
}