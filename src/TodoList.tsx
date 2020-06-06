import React from 'react';
import { TodoListInterface, TodoInterface } from './interfaces';
import { TodoItem } from './TodoItem';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTodos } from './redux/task/task.selector';

export const TodoList = () => {
  const selectors = useSelector(
    createStructuredSelector({
      todos: selectTodos,
    })
  );
  return (
    <div>
      <h2 className="center header">Todos:</h2>
      {selectors.todos.map((todo: TodoInterface) => {
        return (
          <div key={todo.id} className="center list">
            <TodoItem todo={todo} />
          </div>
        );
      })}
    </div>
  );
};
