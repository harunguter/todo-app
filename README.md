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
| `http://localhost:3000`      | `http://localhost:8080` | 

---

## API Reference

#### Get all todos
```http
  GET /api/todo
```

#### Get single todo
```http
  GET /api/todo/:id
```
| Parameter | Type     | 
| --------- | -------- |
| `id`      | `string` |

#### Add todo
```http
  POST /api/todo/

  {
    "content": "string"
  }
```

#### Update todo
```http
  POST /api/todo/:id

  {
    "content": "string"
  }
```
| Parameter | Type     | 
| --------- | -------- |
| `id`      | `string` |

#### Delete todo
```http
  DELETE /api/todo/:id
```
| Parameter | Type     | 
| --------- | -------- |
| `id`      | `string` |

---
## Tech Stack

**Frontend:** React, Semantic UI
<br>
**API:** Node, Express, MongoDB