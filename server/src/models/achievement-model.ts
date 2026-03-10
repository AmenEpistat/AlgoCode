import mongoose, { Schema, Document } from 'mongoose';

export interface IAchievement extends Document {
    key: string;
    title: string;
    description: string;
    icon: string;
    requirementType:
        | 'total_tasks'
        | 'streak'
        | 'total_xp'
        | 'specific_task_type';
    condition: number;
}

const AchievementSchema = new Schema({
    key: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String },
    requirementType: {
        type: String,
        enum: ['total_tasks', 'streak', 'total_xp', 'specific_task_type'],
        required: true,
    },
    condition: { type: Number },
});

export const Achievement = mongoose.model<IAchievement>(
    'Achievement',
    AchievementSchema,
);
