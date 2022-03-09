const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema(
  {
    content: String,
    completed: Boolean,
    date: Date,
  },
  {
    versionKey: false,
  },
)

todoSchema.pre('save', function (next) {
  this.date = new Date()
  this.completed = false
  next()
})

todoSchema.pre('findOneAndUpdate', function (next) {
  this.date = new Date()
  next()
})

const Todo = mongoose.model('Todos', todoSchema)
module.exports = Todo
