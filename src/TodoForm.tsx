import React from 'react';
import shortid from 'shortid';
import { TodoInterface, TodoFormInterface } from '../interfaces';

import {
  TextField,
  Theme,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const TodoForm = (props: TodoFormInterface) => {
  const [todo, setTodo] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    const newTodo: TodoInterface = {
      id: shortid.generate(),
      text: todo,
      isCompleted: false,
    };
    props.handleAddTodo(newTodo);
    setTodo('');
    setOpen(false);
    console.log(newTodo);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        size="large"
        color="primary"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Add Todo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add your Todo here:</DialogTitle>
        <DialogContent>
          <TextField
            id="with-placeholder"
            autoFocus
            margin="dense"
            label="Enter new todo"
            className={classes.textField}
            value={todo}
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  textField: {
    textAlign: 'center',
    width: 200,
  },
  form: {
    textAlign: 'center',
  },
  button: {
    marginTop: '2rem',
    position: 'absolute',
    top: '5rem',
    right: '4rem',
  },
}));
