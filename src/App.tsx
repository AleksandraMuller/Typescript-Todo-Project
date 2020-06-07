import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Main } from './pages/Main';
import { DrawerSidebar } from './components/DrawerSidebar';
import { Homepage } from './pages/Homepage';

const SECRET_KEY = 'TESTING IF IT WORKS';
console.log(SECRET_KEY);

export const App = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <h1>My Typescript Todo</h1>
      </AppBar>
      <BrowserRouter>
        <DrawerSidebar />
        <Switch>
          <Route path="/todos" exact component={Main} />
          <Route path="/" exact component={Homepage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

const useStyles = makeStyles(() => ({
  appBar: {
    textAlign: 'center',
    fontFamily: 'Roboto Condensed,sans-serif',
  },
}));

export default App;
