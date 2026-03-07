import mongoose, { Schema, Document } from 'mongoose';

export interface IProgress extends Document {
    userId: mongoose.Types.ObjectId;
    currentIslandId: mongoose.Types.ObjectId;
    unlockedIslands: mongoose.Types.ObjectId[];
    stats: {
        totalPoints: number;
        rank: number;
    };
}

const ProgressSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    currentIslandId: { type: Schema.Types.ObjectId, ref: 'Island' },
    unlockedIslands: [{ type: Schema.Types.ObjectId, ref: 'Island' }],
    stats: {
        totalPoints: { type: Number, default: 0 },
        rank: { type: Number, default: 0 },
    },
});

export const UserProgress = mongoose.model<IProgress>('UserProgress', ProgressSchema);