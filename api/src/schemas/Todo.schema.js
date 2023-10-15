const mongoose = require('mongoose');

const Todo = new mongoose.Schema(
  {
    content: String,
    is_completed: Boolean,
    created_date: Date,
    updated_date: Date,
  },
  { versionKey: false },
);

module.exports = mongoose.model('todos', Todo);
