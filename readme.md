# Todo Application

![Screenshot](https://raw.githubusercontent.com/harunguter/todo-app/main/screenshot.png)

## Run app

```bash
    git clone https://github.com/harunguter/todo-app.git
    cd todo-app
    docker compose up -d --build
```

| Frontend           | API                    |
| :----------------- | :--------------------- |
| `http://localhost` | `http://localhost/api` |

---

## API Reference

#### Get all todos

```http
GET /todo
```

#### Get single todo

```http
GET /todo/:id
```

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

#### Add todo

```http
POST /todo
```

```javascript
{
    "content": "string"
}
```

#### Update todo

```http
PUT /todo/:id
```

```javascript
{
    "content": "string"
}
```

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

#### Delete todo

```http
DELETE  /todo/:id
```

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

---

## Tech Stack

| Layer      | Technology   | Purpose                          |
| ---------- | ------------ | -------------------------------- |
| Server     | Nginx        | Reverse proxy and static hosting |
| Frontend   | React        | User interface                   |
| Backend    | ASP.NET Core | REST API                         |
| Database   | MongoDB      | Data storage                     |
