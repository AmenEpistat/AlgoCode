import { Strategy as GitHubStrategy } from 'passport-github2';
import { User } from '../../models/user-model';
import { UserStats } from '../../models/user-stats-model';

export const githubStrategy = new GitHubStrategy(
    {
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
                await UserStats.create({
                    userId: user._id,
                    stats: {
                        totalXP: 0,
                        level: 1,
                        currentStreak: 0,
                        rank: 1,
                        lastActivityDate: null,
                    },
                });
            }
            return done(null, user as any);
        } catch (err) {
            return done(err as Error);
        }
    }
);
