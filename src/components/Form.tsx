/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch } from 'react-redux'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Todo, postTodo, updateTodo } from '../state/todo/todoSlice'
import { AppDispatch } from '../state/store'

interface Props {
  action: 'Uppdatera' | 'Lägg till'
  todo?: Todo
  update?: () => void
}

const Form = ({ action, todo, update }: Props) => {
  const Todoschema = z.object({
    id: z
      .number()
      .optional()
      .transform(() => (todo ? todo.id : undefined)),
    title: z.string().min(3, 'Titel måste vara minst 3 bokstäver'),
    body: z.string().min(3, 'Beskrivning måste vara minst 3 bokstäver'),
  })

  type FormData = z.infer<typeof Todoschema>

  const dispatch = useDispatch<AppDispatch>()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(Todoschema),
  })

  const onSubmitTodo = (data: FormData) => {
    dispatch(postTodo(data))
    reset()
  }

  const onUpdateTodo = (data: FormData) => {
    dispatch(updateTodo(data))
    reset()
    update?.()
  }

  return (
    <div className="form-container">
      <h4> {action} </h4>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
            <input
              {...register('title')}
              id="title"
              type="text"
              className="form-control form-input"
              placeholder={todo ? todo.title : 'Skriv en title'}
              style={{ marginLeft: '50px' }}
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
            onClick={handleSubmit(onUpdateTodo)}
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

export default Form
