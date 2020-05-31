import React from 'react';
import { TodoListInterface } from '../interfaces';
import { TodoItem } from './TodoItem';

export const TodoList = (props: TodoListInterface) => {
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        );
      })}
    </div>
  );
};
