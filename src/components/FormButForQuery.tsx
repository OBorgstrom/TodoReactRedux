import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Todo } from "../state/todo/todoSlice";
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface UpdateTodo {
    action: 'Uppdatera' | 'Lägg till'
    todo: Todo;
    title: string;
    body: string;
}

const FormButForQuery = ({ action, todo, title, body }: UpdateTodo) => {

    const queryClient = useQueryClient();

    const Todoschemas = z.object({
        id: z.number(),
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

    const createMutation = useMutation({
        mutationFn: (entity: FormData) => {
            return axios.post('http://81.236.212.238:8080/api/todos/create', entity
        )}
    })


    const updateMutation = useMutation({
        mutationFn: (entity: FormData) => {
            return axios.post('http://81.236.212.238:8080/api/todos/update', entity, {
                headers: {
                    id: todo?.id
                }
            }
        )}
    })

    const onSubmitTodo = (data: FormData) => {
        createMutation.mutate(data, {
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ['todos'] });
            }
        })
        reset();
    }

    const onUpdateTodo = () => {
        const updatedTodo: Todo = {
            ...todo,
            title: title,
            body: body,
        }

        updateMutation.mutate(updatedTodo, {
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ['todos']})
            }
        })

    }


    return (
      <div className="form-container">
        <h4> {action} </h4>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              {...register('title')}
              id="title"
              type="text"
              className="form-control form-input"
              placeholder={todo ? todo.title : 'Skriv en title'}
            />
            {errors.title && (
              <p className="form-error">{`${errors.title.message}`}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Description
            </label>
            <input
              {...register('body')}
              id="body"
              type="text"
              className="form-control form-input"
              placeholder={todo ? todo.body : 'Skriv en beskrivning'}
            />
            {errors.body && (
              <p className="form-error">{`${errors.body.message}`}</p>
            )}
          </div>
          {action == 'Uppdatera' ? (
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
  
  export default FormButForQuery
  