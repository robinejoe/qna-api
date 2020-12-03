import mongoose from 'mongoose';
const { Schema } = mongoose;

export const commentSchema = new Schema({
    questionId: { type: Schema.Types.ObjectId, ref: 'question' },
    user: String,
    content: String
}, { timestamps: true });

export const Comment = mongoose.model('comment', commentSchema)
