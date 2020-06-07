import { TodoActions, TodoAction } from '../task';
import { addTaskToArr, deleteTaskFromArr } from './task.utils';

const INITIAL_STATE = {
  todos: [],
  total: 0,
};

export const taskReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return {
        ...state,
        todos: addTaskToArr(state.todos, action.payload),
        total: state.total + 1,
      };
    case TodoActions.DELETE_TODO:
      return {
        ...state,
        todos: deleteTaskFromArr(state.todos, action.payload),
        total: state.total - 1,
      };
    default:
      return state;
  }
};
