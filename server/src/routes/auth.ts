import { Router } from 'express';
import passport from 'passport';
import AuthController from '../controllers/AuthController.js'; // Импортируем инстанс
import AuthMiddleware from '../middlewares/AuthMiddleware';

const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    AuthController.socialCallback,
);

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    AuthController.socialCallback,
);

router.get('/login/success', AuthMiddleware.isAuthenticated, AuthController.authSuccess);
router.get('/logout', AuthController.logout);

export default router;