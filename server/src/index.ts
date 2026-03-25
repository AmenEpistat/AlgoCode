import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import './config/passport.js';
import authRoutes from './routes/auth.js';
import islandRoutes from './routes/island-routes';
import moduleRoutes from './routes/module-routes';
import taskRoutes from './routes/task-routes';
import errorMiddleware from './middlewares/error-middleware';
import progressRoutes from './routes/progress-routes';
import profileRoutes from './routes/profile-routes';

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);

app.use(express.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET || 'secret',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
        cookie: { maxAge: 24 * 60 * 60 * 1000 },
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);
app.use('/api/islands', islandRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/profile', profileRoutes);

app.use(errorMiddleware);

const start = async () => {
    const MAX_RETRIES = 5;
    let currentRetry = 0;

    while (currentRetry < MAX_RETRIES) {
        try {
            await mongoose.connect(process.env.MONGO_URI!);
            console.log('✅ MongoDB connected successfully');
            break;
        } catch (err) {
            currentRetry++;
            console.log(
                `❌ DB connection failed. Retry ${currentRetry}/${MAX_RETRIES}...`
            );
            await new Promise((res) => setTimeout(res, 2000));
        }
    }

    app.listen(PORT, () => console.log('🚀 Server running on 3001'));
};

start();
