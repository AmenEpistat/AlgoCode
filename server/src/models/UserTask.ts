import mongoose, { Schema, Document } from 'mongoose';

export interface IUserTask extends Document {
    userId: mongoose.Types.ObjectId;
    taskId: mongoose.Types.ObjectId;
    status: 'completed' | 'attempted';
    earnedXP: number;
}

const UserTaskSchema = new Schema<IUserTask>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    taskId: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
    status: { type: String, enum: ['completed', 'attempted'], default: 'completed' },
    earnedXP: { type: Number, default: 0 },
}, { timestamps: true });

UserTaskSchema.index({ userId: 1, taskId: 1 }, { unique: true });

export const UserTask = mongoose.model<IUserTask>('UserTask', UserTaskSchema);