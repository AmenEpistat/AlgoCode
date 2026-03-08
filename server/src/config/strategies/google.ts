import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../../models/user-model';

export const googleStrategy = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        callbackURL: '/api/auth/google/callback',
    },
    async (_accessToken, _refreshToken, profile, done) => {
        try {
            let user = await User.findOne({ googleId: profile.id });
            if (!user) {
                user = await User.create({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    email: profile.emails?.[0].value,
                    avatar: profile.photos?.[0].value,
                });
            }
            return done(null, user);
        } catch (err) {
            return done(err as Error);
        }
    }
);
