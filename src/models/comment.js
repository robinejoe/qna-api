import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema({
    questionId: Schema.Types.ObjectId,
    user: String,
    content: String
}, { timestamps: true });

export const Comment = mongoose.model('comment', commentSchema)
