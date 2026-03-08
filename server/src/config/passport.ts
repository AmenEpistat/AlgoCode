import passport from 'passport';
import { User } from '../models/user-model';
import { googleStrategy } from './strategies/google.js';
import { githubStrategy } from './strategies/github.js';

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

passport.use(googleStrategy);
passport.use(githubStrategy);

export default passport;
