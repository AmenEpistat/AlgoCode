import { Request, Response, NextFunction } from 'express';
import ApiError from '../exceptions/ApiError.js';

class AuthController {
    private readonly CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

    public authSuccess = (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!req.user) {
                throw ApiError.UnauthorizedError();
            }

            res.status(200).json({
                success: true,
                user: req.user,
            });
        } catch (e) {
            next(e);
        }
    };

    public logout = (req: Request, res: Response, next: NextFunction) => {
        req.logout((err) => {
            if (err) return next(err);
            res.redirect(this.CLIENT_URL);
        });
    };

    public socialCallback = (req: Request, res: Response) => {
        res.redirect(`${this.CLIENT_URL}/profile`);
    };
}

export default new AuthController();