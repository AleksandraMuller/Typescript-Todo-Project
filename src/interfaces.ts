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
}
