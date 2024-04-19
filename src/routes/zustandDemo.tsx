import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import FormButForQuery from '../components/FormButForQuery'
import { Todo } from '../types/type'
import useGetTodos from '../hooks/useGetTodos'
import { todoStore } from '../state/zustandStore'
import useTabTitle from '../hooks/useTabTitle'

function ZustandDemoComponent() {
  useTabTitle('Zustand Demo')
  const queryClient = useQueryClient()
  const [update, setUpdate] = useState(false)
  const [updateTodo, setUpdateTodo] = useState<Todo>()
  const { data: todo } = useGetTodos()
  const { deleteTodo } = todoStore()

  const handleUpdate = (todoUpdate: Todo) => {
    setUpdate(true)
    setUpdateTodo(todoUpdate)
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  }

  const deleteMutation = useMutation({
    mutationFn: (entity: Todo) => deleteTodo(entity),
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
    <div className="informations-container">
      <h1>Zustand demo</h1>
      {update ? (
        <FormButForQuery
          action="Uppdatera"
          todo={updateTodo}
          update={() => setUpdate(false)}
          focused={update}
          abort={() => setUpdate(false)}
        />
      ) : (
        <FormButForQuery action="Lägg till" />
      )}
      <div className="todo-list">
        {todo?.map((todoItem: Todo) => (
          <ul className="todo-item" key={todoItem.id}>
            <div>
              <p>
                <strong>Title:</strong> {todoItem.title}
              </p>
              <p>
                <strong>Description:</strong>
                <br /> {todoItem.body}
              </p>
            </div>
            <div className="button-container">
              <button type="submit" onClick={() => handleUpdate(todoItem)}>
                Update
              </button>
              <button
                className="delete"
                type="button"
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

export const Route = createFileRoute('/zustandDemo')({
  component: ZustandDemoComponent,
})
