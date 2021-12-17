const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Todo = require("./schemas/todo");
const connectionString = require("./config");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

mongoose.connect(connectionString, error => {
    if (error) console.log(error)
});

app.get("/todos", (request, response) => {
    Todo.find({}, (error, data) => {
        if (error) response.send(error);
        response.send(data);
    });
});

app.get("/todos/*", (request, response) => {
    const id = request.url.split('/')[2];
    Todo.findById(id, (error, data) => {
        if (error) response.send(error);
        response.send(data);
    });
});

app.put("/todos/*", (request, response) => {
    Todo.findByIdAndUpdate(request.url.split('/')[2], request.body, (error, data) => {
        if (error) response.send(error);
        response.send(data);
    });
});

app.post("/todos", (request, response) => {
    const todo = new Todo(request.body);
    todo.save().then(data => response.send(data)).catch(error => response.send(error));
});

app.listen(3001);