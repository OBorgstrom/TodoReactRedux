import { create } from 'zustand'
import axios from 'axios'

import { Todo } from '../types/type'

export const todoStore = create(() => ({
  addTodo: (todo: Todo) =>
    axios
      .post<Todo>('http://localhost:8080/api/todos/create', todo)
      .then(res => res.data),

  deleteTodo: (todo: Todo) =>
    axios.delete<Todo>('http://localhost:8080/api/todos/delete', {
      headers: {
        id: todo.id,
      },
    }),

  updateTodo: (todo: Todo) =>
    axios.put('http://localhost:8080/api/todos/update', todo, {
      headers: {
        id: todo.id,
      },
    }),
}))
