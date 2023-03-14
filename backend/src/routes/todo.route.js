const _ = require("lodash");

const express = require("express");

const service = require("../services/todo.service");

const todo = express.Router();

todo.get("/:id", async(request, response) => response.send(await service.get({ _id: request.params.id })));

todo.get("/", async(request, response) => response.send(await service.get()));

todo.post("/", async(request, response) => response.send(await service.add(request.body)));

todo.put("/:id", async(request, response) => response.send(await service.update(request.params.id, request.body)));

todo.delete("/:id", async(request, response) => response.send(await service.remove(request.params.id)));

module.exports = todo;
