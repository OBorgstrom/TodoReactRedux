import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState, AppDispatch } from '../state/store'
import { Todo, fetchTodos, deleteTodo } from '../state/todo/todoSlice'
import Form from '../components/Form'

function ReduxDemoComponent() {
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
    <div className="container">
      <h1>Redux</h1>
      {!update && <Form action="Lägg till" />}
      {update && (
        <Form
          action="Uppdatera"
          todo={updateTodo}
          update={() => setUpdate(false)}
        />
      )}
      <div className="todo-list">
        {todo.todos.map((todoItem: Todo) => (
          <ul className="todo-item" key={todoItem.id}>
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
    </div>
  )
}

/*
 *
 * Skapar en Route som renderar componenten ovan ^
 * Som sedan Tanstack router automatiskt skapar ett trädschema
 * med alla routes som skapats så att man inte ska kunna skriva
 * in fel path när man skriver hur navigeringen ska fungera i __root.tsx
 *
 */

export const Route = createFileRoute('/reduxDemo')({
  component: ReduxDemoComponent,
})
