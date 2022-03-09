const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const Todo = require('./schemas/todo')
const connectionString = require('./config')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(cors({ origin: '*' }))

mongoose.connect(connectionString, (error) => {
  if (error) console.log(error)
})

app.post('/api/todos', (request, response) => {
  const todo = new Todo(request.body)
  todo
    .save()
    .then((data) => response.send(data))
    .catch((error) => response.send(error))
})

app.get('/api/todos', (request, response) => {
  Todo.find({}, (error, data) => {
    if (error) response.send(error)
    response.send(data)
  })
})

app.get('/api/todos/*', (request, response) => {
  const id = request.url.split('/')[3]
  Todo.findById(id, (error, data) => {
    if (error) response.send(error)
    response.send(data)
  })
})

app.put('/api/todos/*', (request, response) => {
  Todo.findByIdAndUpdate(
    request.url.split('/')[3],
    request.body,
    (error, data) => {
      if (error) response.send(error)
      response.send(data)
    },
  )
})

app.delete('/api/todos/*', (request, response) => {
  Todo.findByIdAndDelete(request.url.split('/')[3], (error, data) => {
    if (error) response.send(error)
    response.send(data)
  })
})

app.listen(3001)
