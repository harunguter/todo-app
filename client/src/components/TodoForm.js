import { useContext } from 'react'
import MainContext from '../Context'
import config from '../config'
import axios from 'axios'

const TodoForm = () => {
  const { todo, setTodo } = useContext(MainContext)
  const { todos, setTodos } = useContext(MainContext)
  const { update, setUpdate } = useContext(MainContext)

  const addTodo = async (data) => {
    if (data !== null)
      await axios
        .post(config.apiUrl, { content: data })
        .then((response) => {
          console.log(response.data)
          document.getElementById('todo-form').value = null
          setTodo(null)
        })
        .catch((error) => console.log(error))
    else return false
  }

  const updateTodo = async (data) => {
    setTodo(null)
    if (data !== null) {
      const content = document.getElementById('todo-form').value
      await axios
        .put(config.apiUrl + data._id, {
          content: content !== null ? content : data.content,
          date: new Date(),
        })
        .then((response) => {
          console.log(response.data)
          document.getElementById('todo-form').value = null
          setUpdate(null)
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className="todo-form mt-3">
      <input
        className="form-control"
        id="todo-form"
        type="text"
        placeholder="Add your new todo"
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(k) =>
          k.keyCode === 13
            ? update !== null
              ? updateTodo(update)
              : addTodo(todo)
            : null
        }
      />
      {update === null ? (
        <button className="btn btn-info" onClick={() => addTodo(todo)}>
          <i className="fas fa-plus" />
        </button>
      ) : (
        <button className="btn btn-warning" onClick={() => updateTodo(update)}>
          <i className="far fa-edit" />
        </button>
      )}
    </div>
  )
}

export default TodoForm
