import mongoose, { Schema, Document } from 'mongoose';

export interface Stats {
    totalXP: number;
    rank: number;
    level: number;
    currentStreak: number;
    lastActivityDate: Date | null;
}

export interface IUserProgress extends Document {
    userId: mongoose.Types.ObjectId;
    currentIslandId: mongoose.Types.ObjectId;
    unlockedIslands: mongoose.Types.ObjectId[];
    achievements: Array<{
        achievementId: mongoose.Types.ObjectId;
        earnedAt: Date;
    }>;
    stats: Stats;
}

const ProgressSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    currentIslandId: { type: Schema.Types.ObjectId, ref: 'Island' },
    unlockedIslands: [{ type: Schema.Types.ObjectId, ref: 'Island' }],
    achievements: [
        {
            achievementId: { type: Schema.Types.ObjectId, ref: 'Achievement' },
            earnedAt: { type: Date, default: Date.now },
        },
    ],
    stats: {
        totalXP: { type: Number, default: 0 },
        rank: { type: Number, default: 0 },
        level: { type: Number, default: 1 },
        currentStreak: { type: Number, default: 0 },
        lastActivityDate: { type: Date, default: null },
    },
});

export const UserProgress = mongoose.model<IUserProgress>(
    'UserProgress',
    ProgressSchema
);
