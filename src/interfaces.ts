export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface TodoFormInterface {
  todos: TodoInterface[];
  handleAddTodo: (todo: TodoInterface) => void;
}

export interface TodoListInterface {
  todos: TodoInterface[];
}

export interface TodoItemInterface {
  todo: TodoInterface;
  deleteTodo: () => void;
}

export type BoredomFetch = {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
};
