import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import FormButForQuery from '../components/FormButForQuery'
import { Todo } from '../state/todo/todoSlice'
import useGetTodos from '../hooks/useGetTodos'

function ZustandDemoComponent() {
  const queryClient = useQueryClient()
  const [update, setUpdate] = useState(false)
  const [updateTodo, setUpdateTodo] = useState<Todo>()
  const { data: todo } = useGetTodos()

  const handleUpdate = (todoUpdate: Todo) => {
    setUpdate(true)
    setUpdateTodo(todoUpdate)
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  }

  const deleteMutation = useMutation({
    mutationFn: (entity: Todo) =>
      axios.delete('http://localhost:8080/api/todos/delete', {
        headers: {
          id: entity.id,
        },
      }),
  })
  const handleDelete = (deletedTodo: Todo) => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
    deleteMutation.mutate(deletedTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] })
      },
    })
  }

  return (
    <div className="container">
      <h1>Zustand</h1>
      {!update && <FormButForQuery action="Lägg till" />}
      {update && (
        <FormButForQuery
          action="Uppdatera"
          todo={updateTodo}
          update={() => setUpdate(false)}
        />
      )}
      <div className="todo-list">
        {todo?.map((todoItem: Todo) => (
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

export const Route = createFileRoute('/zustandDemo')({
  component: ZustandDemoComponent,
})
