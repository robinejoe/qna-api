import mongoose from 'mongoose';
const { Schema } = mongoose;

const questionSchema = new Schema({
    user: String,
    category: String,
    title: String,
    description: String
}, { timestamps: true });