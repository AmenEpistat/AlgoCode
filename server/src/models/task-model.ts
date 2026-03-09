import mongoose, { Schema } from 'mongoose';

const BaseTaskSchema = new Schema({
    moduleId: {
        type: Schema.Types.ObjectId,
        ref: 'Module',
        required: true,
        index: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    rewardXP: { type: Number, default: 10 },
    order: { type: Number, required: true },
    stepNumber: { type: Number, default: 1 },
});

export const Task = mongoose.model('Task', BaseTaskSchema);

Task.discriminator(
    'theory',
    new Schema({
        body: { type: String, required: true },
    }),
);

Task.discriminator(
    'code',
    new Schema({
        difficulty: {
            type: String,
            enum: ['Easy', 'Medium', 'Hard'],
            required: true,
        },
        starterCode: { type: Map, of: String },
        tests: [
            {
                id: Number,
                name: String,
                input: Schema.Types.Mixed,
                expected: Schema.Types.Mixed,
            },
        ],
    }),
);

Task.discriminator(
    'quiz',
    new Schema({
        questions: [
            {
                question: { type: String, required: true },
                options: [{ type: String, required: true }],
                correctAnswer: { type: Number, required: true },
            },
        ],
    }),
);
