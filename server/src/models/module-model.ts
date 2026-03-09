import mongoose, { Schema, Document } from 'mongoose';

export interface IModule extends Document {
    islandId: mongoose.Types.ObjectId;
    title: string;
    description: string;
    order: number;
    slug: string;
}

const ModuleSchema = new Schema<IModule>({
    islandId: {
        type: Schema.Types.ObjectId,
        ref: 'Island',
        required: true,
        index: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        default: '',
    },
    order: {
        type: Number,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
});

ModuleSchema.index({ islandId: 1, order: 1 }, { unique: true });

export const Module = mongoose.model<IModule>('Module', ModuleSchema);
