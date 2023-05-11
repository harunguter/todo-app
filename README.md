# Todo Application

![Screenshot](https://raw.githubusercontent.com/harunguter/todo-app/main/screenshot.png)

## Run app
```bash
    git clone https://github.com/harun-guter/todo-app.git
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
```
  GET /todo/:id
```
| Parameter | Type     | 
| --------- | -------- |
| `id`      | `string` |

#### Add todo
```
  POST /todo
```
```
  {
    "content": "string"
  }
```

#### Update todo
```
  PUT /todo/:id
```
```
  {
    "content": "string"
  }
```
| Parameter | Type     | 
| --------- | -------- |
| `id`      | `string` |

#### Delete todo
```
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
