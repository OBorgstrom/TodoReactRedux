import { useQuery } from 'react-query'
import axios from 'axios'

import { Todo } from '../state/todo/todoSlice'

async function fetchTodos() {
  const response = await axios.get<Todo[]>(
    'http://localhost:8080/api/todos/all',
  )

  return response.data
}

const useTodos = () =>
  useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: fetchTodos,

    // används för att transformera data endast vid sucessful fetch
    select: (data: Todo[]) =>
      data.sort((todoA, todoB) => todoB.id! - todoA.id!),
  })

export default useTodos
