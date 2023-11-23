import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Todo,
  deleteTodo,
  fetchTodos,
  updateTodo,
} from './state/todo/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './state/store';

function App() {
  const [update, setUpdate] = useState(false);
  const [updateTodo, setUpdateTodo] = useState<Todo>();

  const todo = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleUpdate = (todo: Todo) => {
    setUpdate(true);
    setUpdateTodo(todo);
  };

  const handleDelete = (todo: Todo) => {
    dispatch(deleteTodo(todo));
  };

  return (
    <>
      {!update && <Form action='Lägg till' />}
      {update && (
        <Form
          action='Uppdatera'
          todo={updateTodo}
          update={() => setUpdate(false)}
        />
      )}
      <div className='container'>
        {todo.todos.map((todo: Todo) => (
          <ul className='todo-item' key={todo.id}>
            <li>
              <strong>Title:</strong> {todo.title} <br />
              <strong>Description:</strong> {todo.body}
            </li>
            <div className='button-container'>
              <button onClick={() => handleUpdate(todo)}>Update</button>
              <button onClick={() => handleDelete(todo)}>Delete</button>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
