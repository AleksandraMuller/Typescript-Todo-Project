import { createSelector } from 'reselect';

export const selectTaskFile = (state: any) => state.task;

export const selectTodos = createSelector(
  [selectTaskFile],
  (task) => task.todos
);
