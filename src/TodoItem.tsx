import React from 'react';
import { TodoItemInterface } from './interfaces';

export const TodoItem = (props: TodoItemInterface) => {
  return <p>{props.todo.text}</p>;
};
