const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    userId: Number,
    title: String,
    content: String,
    isCompleted: Boolean,
    createdAt: Date,
    updatedAt: Date
});

todoSchema.pre("save", function(next){
    const date = new Date();
    this.createdAt = date;
    this.updatedAt = date;
    next();
});


todoSchema.pre("findOneAndUpdate", function(next){
    this.updatedAt = new Date();
    next();
});

const Todo = mongoose.model("Todos", todoSchema);
module.exports = Todo;