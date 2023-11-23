import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Todo {
    id : number,
    title: string,
    body: string
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
 
};

export const fetchTodos = createAsyncThunk('todo/all', async () => {
    return axios.get<Todo>('http://localhost:8080/api/todos/all')
      .then((res) => {
        return res.data
      })
  
});
export const updateTodo = createAsyncThunk('todo/update', async (todo: Todo,) => {
    return axios.put<Todo>('http://localhost:8080/api/todos/update', todo, {
        headers: {
            id: todo.id,
        }
    })
      .then((res) => {
        return res.data
      })
  
});
export const deleteTodo = createAsyncThunk('todo/delete', async (todo: Todo) => {
    return axios.delete<Todo>('http://localhost:8080/api/todos/delete', {
        headers: {
            id: todo.id
        }
    })
      .then(() => {
        return todo
      })
  
});

export const postTodo = createAsyncThunk('todo/create', async (todo: Todo) => {
    return axios.post<Todo>('http://localhost:8080/api/todos/create', todo)
      .then((res) => {
        return res.data
      })
  
});



export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
   
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo>) => {
        
        state.todos = [...(action.payload as unknown as [])];
        
      })
      .addCase(postTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        
        state.todos = [...state.todos ,action.payload];
        
      })
      .addCase(updateTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos = state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return action.payload
          }
          return todo
        });
      })
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos = state.todos.filter(todo => todo.id != action.payload.id)
      })
      
   
  },
});

export default todoSlice.reducer;
