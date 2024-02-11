import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { QueryClient, useMutation } from 'react-query'
import axios from 'axios'

import FormButForQuery from '../components/FormButForQuery'
import { Todo } from '../state/todo/todoSlice'
import useGetTodos from '../hooks/useGetTodos'

function QueryComponent() {
  const [update, setUpdate] = useState(false)
  const [updateTodo, setUpdateTodo] = useState<Todo>()
  const { data: todo } = useGetTodos()
  const queryClient = new QueryClient()

  const handleUpdate = (todoUpdate: Todo) => {
    setUpdate(true)
    setUpdateTodo(todoUpdate)
    queryClient.invalidateQueries(['todos'])
  }

  const deleteMutation = useMutation((todoDelete: Todo) =>
    axios.delete('http://localhost:8080/api/todos/delete', {
      headers: {
        id: todoDelete.id,
      },
    }),
  )

  const handleDelete = (deletedTodo: Todo) => {
    queryClient.invalidateQueries(['todos'])
    deleteMutation.mutate(deletedTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos'])
      },
    })
  }

  return (
    <>
      {!update && <FormButForQuery action="Lägg till" />}
      {update && (
        <FormButForQuery
          action="Uppdatera"
          todo={updateTodo}
          update={() => setUpdate(false)}
        />
      )}
      <div className="container">
        {todo?.map((todoItem: Todo) => (
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

/*
 *
 * Skapar en Route som renderar componenten ovan ^
 * Som sedan Tanstack router automatiskt skapar ett trädschema
 * med alla routes som skapats så att man inte ska kunna skriva
 * in fel path när man skriver hur navigeringen ska fungera i __root.tsx
 *
 */

export const Route = createFileRoute('/query')({
  component: QueryComponent,
})
