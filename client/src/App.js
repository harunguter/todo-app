import './App.scss'
import { useState } from 'react'
import MainContext from './Context'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoInfo from './components/TodoInfo'

const App = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState(null)
  const [update, setUpdate] = useState(null)

  const states = {
    todos,
    setTodos,
    todo,
    setTodo,
    update,
    setUpdate,
  }

  return (
    <MainContext.Provider value={states}>
      <section className="container">
        <div className="col-xl-5 col-md-8 px-5 py-3 mt-3 todo-container">
          <p className="todo-title my-2">{'Todo App'}</p>
          <TodoForm />
          <TodoList />
          <TodoInfo />
        </div>
      </section>
    </MainContext.Provider>
  )
}

export default App
