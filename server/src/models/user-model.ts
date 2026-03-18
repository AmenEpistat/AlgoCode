import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
    displayName: string;
    email: string;
    avatar: string;
    role: 'user' | 'admin';

    googleId: string;
    githubId: string;
}

const UserSchema = new mongoose.Schema(
    {
        displayName: { type: String, required: true },
        email: { type: String, unique: true, sparse: true },
        avatar: String,
        role: { type: String, enum: ['user', 'admin'], default: 'user' },

        googleId: { type: String, unique: true, sparse: true },
        githubId: { type: String, unique: true, sparse: true },
    },
    { timestamps: true }
);

export const User = mongoose.model<IUser>('User', UserSchema);
