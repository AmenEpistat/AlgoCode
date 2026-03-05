import ApiError from '../exceptions/ApiError.js';
import { Request, Response, NextFunction } from 'express';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(`[ERROR]: ${err.message}`);

    if (err instanceof ApiError) {
        return res.status(err.status).json({
            message: err.message,
            errors: err.errors,
        });
    }

    return res.status(500).json({
        message: 'Произошла непредвиденная ошибка на сервере',
    });
};