# Todo Application

![Screenshot](https://raw.githubusercontent.com/harunguter/todo-app/main/screenshot.png)

## Run app
```bash
    git clone https://github.com/harunguter/todo-app.git
    cd todo-app
    docker-compose up
```

| Frontend | API |
| :-------- | :------- |
| `http://localhost`      | `http://localhost/api` | 

---

## API Reference

#### Get all todos
```http
GET /api/todo
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

**Server:** Nginx
<br>
**Frontend:** React, Semantic UI
<br>
**API:** Node, Express, MongoDB
