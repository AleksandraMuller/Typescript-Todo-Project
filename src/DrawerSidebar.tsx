import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 260,
  },
}));

export const DrawerSidebar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button onClick={() => history.push('/')}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <Divider />
      <ListItem button divider onClick={() => history.push('/todos')}>
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary="My Todo List" />
      </ListItem>
      <Divider light />
    </List>
  );
};
