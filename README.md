# Todo Application

![Screenshot](https://raw.githubusercontent.com/harun-guter/todo-app/main/screenshot/app.png)

## Installation

```bash
git clone https://github.com/harun-guter/todo-app.git
cd todo-app
install.bat
```

Change *connectionString* value from **server\config.js** file.

## Run Locally

```bash
cd todo-app
start.bat
```

| Server | Client |
| :-------- | :------- |
| `http://localhost:3001`      | `http://localhost:3000` | 

## API Reference

#### Get all todos

```apib
GET /todos
```

| Parameter |
| :-------- |
| `null` |

#### Get single todo

```apib
GET /todos/{id}

```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` | 

#### Add a new todo

```apib
POST /todos
```

```apib
{"content": String}
```

#### Update todo

```apib
PUT /todos/{id}
```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` | 

```apib
{"content": String}
```

#### Delete todo

```apib
DELETE /todos/{id}
```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` |

## Tech Stack

**Client:** React, Bootstrap
<br>
**Server:** Node, Express, MongoDB

