import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js'
import { QueryClient, useMutation } from 'react-query'
import axios from 'axios'

import { Todo } from '../state/todo/todoSlice'

interface Props {
  action: 'Uppdatera' | 'Lägg till'
  todo?: Todo
  update?: () => void
}

const FormButForQuery = ({ action, todo, update }: Props) => {
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
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(Todoschemas),
  })

  const queryClient = new QueryClient()

  const updateMutation = useMutation({
    mutationFn: (entity: Todo) =>
      axios.put('http://localhost:8080/api/todos/update', entity, {
        headers: {
          id: entity.id,
        },
      }),
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
    mutationFn: (entity: FormData) =>
      axios.post('http://localhost:8080/api/todos/create', entity, {
        headers: {
          id: todo?.id,
        },
      }),
  })

  const onSubmitTodo = (data: FormData) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] })
      },
    })
  }

  return (
    <div className="form-container">
      <h4> {action} </h4>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('title')}
              id="title"
              type="text"
              className="form-control form-input"
              placeholder={todo ? todo.title : 'Skriv en title'}
            />
          </label>
          {errors.title && (
            <p className="form-error">{`${errors.title.message}`}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Description
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('body')}
              id="body"
              type="text"
              className="form-control form-input"
              placeholder={todo ? todo.body : 'Skriv en beskrivning'}
            />
          </label>
          {errors.body && (
            <p className="form-error">{`${errors.body.message}`}</p>
          )}
        </div>
        {action === 'Uppdatera' ? (
          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit(handleConfirmUpdate)}
          >
            Uppdatera
          </button>
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
