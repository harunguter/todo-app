# Todo Application

![Screenshot](https://raw.githubusercontent.com/harunguter/todo-app/main/screenshot.png)

## Run app
```
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
```
  GET /api/todo
```

#### Get single todo
```
  GET /api/todo/:id
```
| Parameter | Type     | 
| --------- | -------- |
| `id`      | `string` |

#### Add todo
```
  POST /api/todo/

  {
    "content": "string"
  }
```

#### Update todo
```
  PUT /api/todo/:id

  {
    "content": "string"
  }
```
| Parameter | Type     | 
| --------- | -------- |
| `id`      | `string` |

#### Delete todo
```
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