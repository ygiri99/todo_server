import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

// const todoModel = mongoose.model('todos', todoSchema);

export default mongoose.model('todos', todoSchema);
// todoModel;