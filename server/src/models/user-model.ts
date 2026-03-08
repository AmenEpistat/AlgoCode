import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
    displayName: string;
    email: string;
    avatar: string;
    role: 'user' | 'admin';

    googleId: string;
    githubId: string;

    stats: {
        totalXP: number;
        rank: number;
        level: number;
    };
}

const UserSchema = new mongoose.Schema(
    {
        displayName: { type: String, required: true },
        email: { type: String, unique: true, sparse: true },
        avatar: String,
        role: { type: String, enum: ['user', 'admin'], default: 'user' },

        googleId: { type: String, unique: true, sparse: true },
        githubId: { type: String, unique: true, sparse: true },

        stats: {
            totalXP: { type: Number, default: 0 },
            rank: { type: Number, default: 0 },
            level: { type: Number, default: 1 },
        },
    },
    { timestamps: true }
);

export const User = mongoose.model<IUser>('User', UserSchema);
