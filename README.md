# Todo Application

![Screenshot](https://raw.githubusercontent.com/harun-guter/todo-app/main/screenshot/app.png)

## Installation

```bash
git clone https://github.com/harun-guter/todo-app.git
cd todo-app
install.bat
```
Rename the file **server\\_config.js** to **server\config.js**.
<br>
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

```http
GET /api/todos
```

#### Get single todo

```http
GET /api/todos/{id}
```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` | 

#### Add a new todo

```http
POST /api/todos
```

```apib
Body: {"content": String}
```

#### Update todo

```http
PUT /api/todos/{id}
```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` | 

```apib
Body: {"content": String}
```

#### Delete todo

```http
DELETE /api/todos/{id}
```

| Parameter | Type     |
| :-------- | :------- |
| `id`      | `string` |

## Tech Stack

**Client:** React, Bootstrap
<br>
**Server:** Node, Express, MongoDB

