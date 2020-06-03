import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Main } from './Main';
import { DrawerSidebar } from './DrawerSidebar';
import { Homepage } from './Homepage';

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
