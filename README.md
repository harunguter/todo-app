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
   ### Expect { message: 'Wellcome to TestsAPI'}
   GET http://localhost:5001/

   ### Expect code 201 and info about the new user
   POST http://localhost:5001/user
   Content-Type: application/json

   {
     "name": "Pitossomo",
     "email": "pitossomos@hmail.com" 
   }
   
   ### Expect code 400
   POST http://localhost:5001/user
   Content-Type: application/json

   { 
     "name": "",
     "email": "" 
   }
   ```

#### Get single todo
```http
  GET   /todo/:id/
```
| Parameter | Type     | 
| --------- | -------- |
| `id`      | `string` |

#### Add todo
```http
  POST  /todo/
```
```
  {
    "content": "string"
  }
```

#### Update todo
```http
  PUT /todo/:id/
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
```http
  DELETE  /todo/:id/
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
