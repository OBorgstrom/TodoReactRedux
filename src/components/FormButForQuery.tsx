/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

import { Todo } from '../types/type'
import { todoStore } from '../state/zustandStore'

interface Props {
  action: 'Uppdatera' | 'Lägg till'
  todo?: Todo
  update?: () => void
  focused?: boolean
  abort?: () => void
}

const FormButForQuery = ({ action, abort, todo, update, focused }: Props) => {
  const queryClient = useQueryClient()
  const { addTodo, updateTodo } = todoStore()
  const Todoschemas = z.object({
    id: z
      .number()
      .optional()
      .transform(() => (todo ? todo.id : undefined)),
    title: z.string().min(3, 'Titel måste vara minst 3 bokstäver'),
    body: z.string().min(3, 'Beskrivning måste vara minst 3 bokstäver'),
  })

  type FormData = z.infer<typeof Todoschemas>

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(Todoschemas),
  })

  const updateMutation = useMutation({
    mutationFn: (entity: Todo) => updateTodo(entity),
  })

  const handleConfirmUpdate = (data: FormData) => {
    updateMutation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] })
      },
    })
    reset()
    update?.()
  }

  const createMutation = useMutation({
    mutationFn: (entity: FormData) => addTodo(entity),
    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos'])

      queryClient.setQueryData<Todo[]>(['todos'], (Todos = []) => [
        ...Todos,
        newTodo,
      ])
      return { previousTodos }
    },
  })

  const onSubmitTodo = (data: FormData) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] })
        reset()
      },
    })
  }

  useEffect(() => {
    if (focused) {
      setFocus('title')
    }
  })

  return (
    <div className="form-container">
      <h2 className="title"> {action} </h2>
      <form>
        <div className="form-group">
          <label htmlFor="title" className="form-title">
            Title
          </label>
          <input
            {...register('title')}
            id="title"
            type="text"
            className="form-input"
            placeholder={todo ? todo.title : 'Skriv en title'}
          />
          {errors.title && (
            <p className="form-error">{`${errors.title.message}`}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="body" className="form-title">
            Description
          </label>
          <input
            {...register('body')}
            id="body"
            type="text"
            className="form-input"
            placeholder={todo ? todo.body : 'Skriv en beskrivning'}
          />
          {errors.body && (
            <p className="form-error">{`${errors.body.message}`}</p>
          )}
        </div>
        {action === 'Uppdatera' ? (
          <>
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit(handleConfirmUpdate)}
            >
              Uppdatera
            </button>
            <button className="delete" type="submit" onClick={abort}>
              Avbryt uppdatering
            </button>
          </>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit(onSubmitTodo)}
          >
            Lägg till
          </button>
        )}
      </form>
    </div>
  )
}

export default FormButForQuery
