import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('todos', todoSchema);
