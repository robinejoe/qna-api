import mongoose from 'mongoose';
import { categorySchema } from './category'
const { Schema } = mongoose;

const questionSchema = new Schema({
    user: String,
    category: { type: Schema.Types.ObjectId, ref: 'category' },
    title: String,
    description: String
}, { timestamps: true });

export const Question = mongoose.model('question', questionSchema)