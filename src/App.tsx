import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

import './App.css'
import Form from './components/Form'
import { Todo, deleteTodo, fetchTodos } from './state/todo/todoSlice'
import { AppDispatch, RootState } from './state/store'
import Header from './components/Header'

function App() {
  const [update, setUpdate] = useState(false)
  const [updateTodo, setUpdateTodo] = useState<Todo>()
  const todo = useSelector((state: RootState) => state.todoReducer)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const handleUpdate = (todoUpdate: Todo) => {
    setUpdate(true)
    setUpdateTodo(todoUpdate)
  }

  const handleDelete = (todoDelete: Todo) => {
    dispatch(deleteTodo(todoDelete))
  }

  return (
    <>
      <Header />
      {!update && <Form action="Lägg till" />}
      {update && (
        <Form
          action="Uppdatera"
          todo={updateTodo}
          update={() => setUpdate(false)}
        />
      )}
      <div className="container">
        {todo.todos.map((todoItem: Todo) => (
          <ul className="todoItem-item" key={todoItem.id}>
            <li>
              <strong>Title:</strong> {todoItem.title} <br />
              <strong>Description:</strong> {todoItem.body}
            </li>
            <div className="button-container">
              <button type="submit" onClick={() => handleUpdate(todoItem)}>
                Update
              </button>
              <button type="button" onClick={() => handleDelete(todoItem)}>
                Delete
              </button>
            </div>
          </ul>
        ))}
      </div>
    </>
  )
}

export default App
