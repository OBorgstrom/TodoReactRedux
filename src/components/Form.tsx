/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch } from 'react-redux'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useEffect } from 'react'

import { postTodo, updateTodo } from '../state/todo/todoSlice'
import { Todo } from '../types/type'
import { AppDispatch } from '../state/store'

interface Props {
  action: 'Uppdatera' | 'Lägg till'
  todo?: Todo
  update?: () => void
  abort?: () => void
  focused?: boolean
}

const Form = ({ action, abort, focused, todo, update }: Props) => {
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
    setFocus,
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
              onClick={handleSubmit(onUpdateTodo)}
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

export default Form
