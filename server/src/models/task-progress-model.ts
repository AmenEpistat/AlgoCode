import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ITaskProgress extends Document {
    userId: Types.ObjectId;
    taskId: Types.ObjectId;
    moduleId: Types.ObjectId;
    status: 'not_started' | 'in_progress' | 'completed';
    score: number;
    completedAt?: Date;
}

const TaskProgressSchema = new Schema<ITaskProgress>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        taskId: {
            type: Schema.Types.ObjectId,
            ref: 'Task',
            required: true,
        },
        moduleId: {
            type: Schema.Types.ObjectId,
            ref: 'Module',
            required: true,
        },
        status: {
            type: String,
            enum: ['not_started', 'in_progress', 'completed'],
            default: 'not_started',
        },
        score: {
            type: Number,
            default: 0,
        },
        completedAt: {
            type: Date,
        },
    },
    { timestamps: true },
);

TaskProgressSchema.index({ userId: 1, taskId: 1 }, { unique: true });

TaskProgressSchema.index({ userId: 1, moduleId: 1 });

export const TaskProgress = mongoose.model<ITaskProgress>(
    'TaskProgress',
    TaskProgressSchema,
);
