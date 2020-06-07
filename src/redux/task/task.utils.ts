import { TodoInterface } from '../../interfaces';
export const addTaskToArr = (todos: TodoInterface[], task: TodoInterface) => [
  ...todos,
  task,
];

export const deleteTaskFromArr = (
  todos: TodoInterface[],
  task: TodoInterface
) => {
  const filtered = todos.filter((todo) => todo !== task);
  return filtered;
};
