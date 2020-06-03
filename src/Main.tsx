import React from 'react';
import './App.css';
import { TodoForm } from './TodoForm';
import { TodoInterface } from '../interfaces';
import { TodoList } from './TodoList';
import { DrawerSidebar } from './DrawerSidebar';

import { makeStyles } from '@material-ui/styles';

export const Main: React.FC = () => {
  const classes = useStyles();
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  const handleAddTodo = (todo: TodoInterface) => {
    const newTodosState: TodoInterface[] = [...todos];

    // Update new todos state
    newTodosState.push(todo);

    // Update todos state
    setTodos(newTodosState);
  };

  console.log(todos);

  return (
    <div className={classes.root}>
      <TodoForm todos={todos} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },

  appBar: {
    textAlign: 'center',
    fontFamily: 'Roboto Condensed,sans-serif',
  },
  drawer: {
    height: '20rem',
  },
}));

// export default App;
