import mongoose from 'mongoose';
const todoModels = new mongoose.Schema(
  {
    id: {
      type: int,
      required: true,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: boolean,
      default: false,
    },
    // Below giving refrnce to another model of user
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    // Giving refence of another todo
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);
export const Todo = mongoose.model('Todo', todoModels);
