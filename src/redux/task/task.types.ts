import { TodoInterface } from '../../interfaces';

export enum TodoActions {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

export interface TodoActionType<T, P> {
  type: T;
  payload: P;
}

export type TodoAction =
  | TodoActionType<typeof TodoActions.ADD_TODO, TodoInterface>
  | TodoActionType<typeof TodoActions.DELETE_TODO, TodoInterface>;
