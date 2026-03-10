import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IActivityLog extends Document {
    userId: Types.ObjectId;
    date: Date;
    activityType: 'task_completed' | 'achievement_earned' | 'level_up';
    relatedId?: Types.ObjectId;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

const ActivityLogSchema = new Schema<IActivityLog>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        activityType: {
            type: String,
            enum: ['task_completed', 'achievement_earned', 'level_up'],
            required: true,
        },
        relatedId: {
            type: Schema.Types.ObjectId,
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

ActivityLogSchema.index({ userId: 1, date: -1 });

export const ActivityLog = mongoose.model<IActivityLog>(
    'ActivityLog',
    ActivityLogSchema,
);
