import { Strategy as GitHubStrategy } from 'passport-github2';
import { User } from '../../models/User.js';

export const githubStrategy = new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID || '',
        clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
        callbackURL: '/api/auth/github/callback',
    },
    async (_accessToken: any, _refreshToken: any, profile: any, done: any) => {
        try {
            let user = await User.findOne({ githubId: profile.id });
            if (!user) {
                user = await User.create({
                    githubId: profile.id,
                    displayName: profile.displayName || profile.username,
                    email: profile.emails?.[0].value,
                    avatar: profile.photos?.[0].value,
                });
            }
            return done(null, user);
        } catch (err) {
            return done(err as Error);
        }
    });