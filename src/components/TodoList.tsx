import React from 'react';
import { TodoListInterface, TodoInterface } from '../interfaces';
import { TodoItem } from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTodos } from '../redux/task/task.selector';
import { deleteTask } from '../redux/task/task.actions';

export const TodoList = () => {
  const dispatch = useDispatch();
  const selectors = useSelector(
    createStructuredSelector({
      todos: selectTodos,
    })
  );

  const handleDelete = (index: number) => {
    const task = selectors.todos[index];
    dispatch(deleteTask(task));
  };

  return (
    <div>
      <h2 className="center header">Todos:</h2>
      {selectors.todos.map((todo: TodoInterface, index: number) => {
        return (
          <div key={todo.id} className="center list">
            <TodoItem todo={todo} deleteTodo={() => handleDelete(index)} />
          </div>
        );
      })}
    </div>
  );
};
