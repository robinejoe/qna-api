import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
    category: {
        type : String, 
        unique : true, 
        required : true
    }
});