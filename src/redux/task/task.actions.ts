import { TodoActions, TodoAction } from './task.types';
import { TodoInterface } from '../../interfaces';

export const addTask = (task: TodoInterface): TodoAction => ({
  type: TodoActions.ADD_TODO,
  payload: task,
});

export const deleteTask = (task: TodoInterface): TodoAction => ({
  type: TodoActions.DELETE_TODO,
  payload: task,
});
