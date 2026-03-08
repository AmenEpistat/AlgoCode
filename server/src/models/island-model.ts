import mongoose, { Schema, Document } from 'mongoose';

export interface IIsland extends Document {
    slug: string;
    title: string;
    type: string;
    description: string;
    x: number;
    y: number;
    order: number;
}

const IslandSchema = new Schema<IIsland>(
    {
        slug: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        type: { type: String, required: true, index: true },
        description: { type: String },
        x: { type: Number, required: true },
        y: { type: Number, required: true },
        order: { type: Number, required: true, unique: true },
    },
    { timestamps: true }
);

export const Island = mongoose.model<IIsland>('Island', IslandSchema);
