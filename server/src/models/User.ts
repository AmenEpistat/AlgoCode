import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    displayName: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    avatar: String,
    role: { type: String, enum: ['user', 'admin'], default: 'user' },

    googleId: { type: String, unique: true, sparse: true },
    githubId: { type: String, unique: true, sparse: true },

    stats: {
        totalPoints: { type: Number, default: 0 },
        rank: { type: Number, default: 0 },
    },
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema);