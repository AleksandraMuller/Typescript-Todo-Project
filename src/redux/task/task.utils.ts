import { TodoInterface } from '../../interfaces';
export const addTaskToArr = (todos: TodoInterface[], task: TodoInterface) => [
  ...todos,
  task,
];
