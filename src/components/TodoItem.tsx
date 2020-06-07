import React from 'react';
import { TodoItemInterface } from '../interfaces';
import DeleteIcon from '@material-ui/icons/Delete';

export const TodoItem = (props: TodoItemInterface) => {
  return (
    <div>
      <p>{props.todo.text}</p>
      <DeleteIcon type="button" onClick={props.deleteTodo} />
    </div>
  );
};
