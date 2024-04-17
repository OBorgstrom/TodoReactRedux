import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState, AppDispatch } from '../state/store'
import { fetchTodos, deleteTodo } from '../state/todo/todoSlice'
import { Todo } from '../types/type'
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
    <div className="informations-container">
      <h1>Redux demo</h1>
      {update ? (
        <Form
          action="Uppdatera"
          todo={updateTodo}
          update={() => setUpdate(false)}
          focused={update}
          abort={() => setUpdate(false)}
        />
      ) : (
        <Form action="Lägg till" />
      )}
      <div className="todo-list">
        {todo.todos.map((todoItem: Todo) => (
          <ul className="todo-item" key={todoItem.id}>
            <div>
              <p>
                <strong>Title:</strong> {todoItem.title}
              </p>
              <p>
                <strong>Description:</strong> {todoItem.body}
              </p>
            </div>
            <div className="button-container">
              <button type="submit" onClick={() => handleUpdate(todoItem)}>
                Update
              </button>
              <button
                type="button"
                className="delete"
                onClick={() => handleDelete(todoItem)}
              >
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
