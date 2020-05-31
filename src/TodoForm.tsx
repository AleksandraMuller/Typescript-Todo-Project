import React from 'react';
import shortid from 'shortid';
import { TodoInterface, TodoFormInterface } from '../interfaces';

export const TodoForm = (props: TodoFormInterface) => {
  const [todo, setTodo] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: TodoInterface = {
      id: shortid.generate(),
      text: todo,
      isCompleted: false,
    };
    props.handleAddTodo(newTodo);
    setTodo('');
    console.log(newTodo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={todo}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
