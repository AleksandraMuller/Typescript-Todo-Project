import React from 'react';
import './App.css';
import { TodoForm } from './TodoForm';
import { TodoInterface } from '../interfaces';
import { TodoList } from './TodoList';

function App() {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  const handleAddTodo = (todo: TodoInterface) => {
    const newTodosState: TodoInterface[] = [...todos];

    // Update new todos state
    newTodosState.push(todo);

    // Update todos state
    setTodos(newTodosState);
  };

  console.log(todos);

  return (
    <div>
      <h1>My Typescript Todo</h1>
      <TodoForm todos={todos} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
