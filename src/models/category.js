import mongoose from 'mongoose';
const { Schema } = mongoose;

export const categorySchema = new Schema({
    name: {
        type : String,
        index: true,
        unique : true,
        required : true
    }
});

export const Category = mongoose.model('category', categorySchema)