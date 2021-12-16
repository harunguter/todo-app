const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./schemas/todo");
const connectionString = require("./config");

const app = express();

mongoose.connect(connectionString, (error) => {
    error ? console.log(error) : console.log("Connected.")
});

app.get("/todos", (request, response) => {

    const todo = new Todo({
        title: "Test",
        content: "Test content",
        userId: null,
        isCompleted: false,
    });

    response.send("test");
});

app.listen(3001);