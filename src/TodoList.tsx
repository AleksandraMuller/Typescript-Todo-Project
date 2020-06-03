import React from 'react';
import { TodoListInterface } from '../interfaces';
import { TodoItem } from './TodoItem';

export const TodoList = (props: TodoListInterface) => {
  return (
    <div>
      <h2 className="center header">Todos:</h2>
      {props.todos.map((todo) => {
        return (
          <div key={todo.id} className="center list">
            <TodoItem todo={todo} />
          </div>
        );
      })}
    </div>
  );
};
