import { Request, Response, NextFunction } from 'express';
import ApiError from '../exceptions/ApiError.js';

class AuthMiddleware {
    public isAuthenticated(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.isAuthenticated()) {
                return next();
            }
            throw ApiError.UnauthorizedError();
        } catch (e) {
            next(e);
        }
    }
}

export default new AuthMiddleware();