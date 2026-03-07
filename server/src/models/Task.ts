import mongoose, { Schema } from 'mongoose';

const TaskSchema = new Schema({
    moduleId: { type: Schema.Types.ObjectId, ref: 'Module', required: true, index: true },
    type: {
        type: String,
        enum: ['theory', 'code', 'quiz'],
        required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    rewardXP: { type: Number, default: 10 },
    order: { type: Number, required: true },

    body: { type: String },

    codeData: {
        difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
        starterCode: {
            type: Map,
            of: String,
        },
        tests: [{
            input: String,
            expected: String,
            isPublic: { type: Boolean, default: true },
        }],
    },

    quizData: [{
        question: { type: String, required: true },
        options: [{ type: String, required: true }],
        correctAnswer: { type: Number, required: true },
        explanation: { type: String },
    }],
}, { timestamps: true });

export const Task = mongoose.model('Task', TaskSchema);