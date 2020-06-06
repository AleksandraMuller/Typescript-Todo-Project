import React from 'react';
import './App.css';
import { TodoForm } from './TodoForm';
import { TodoInterface } from './interfaces';
import { TodoList } from './TodoList';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTodos } from './redux/task/task.selector';
import { makeStyles } from '@material-ui/styles';

export const Main: React.FC = () => {
  const classes = useStyles();
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  const selectors = useSelector(
    createStructuredSelector({
      todos: selectTodos,
    })
  );

  console.log(selectors.todos.map((todo: TodoInterface) => todo));

  const handleAddTodo = (todo: TodoInterface) => {
    const newTodosState: TodoInterface[] = [...todos];

    // Update new todos state
    newTodosState.push(todo);

    // Update todos state
    setTodos(newTodosState);
  };

  return (
    <div className={classes.root}>
      <TodoForm todos={selectors.todos} handleAddTodo={handleAddTodo} />
      <TodoList />
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
