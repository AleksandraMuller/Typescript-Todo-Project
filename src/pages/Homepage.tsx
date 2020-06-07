import React from 'react';
import { Button } from '@material-ui/core';

export const Homepage = () => {
  return (
    <div className="center">
      <h2>If you have nothing else todo, you can try this:</h2>
      <p>THE FETCH</p>
      <Button variant="outlined" size="large" color="secondary">
        GET MORE IDEAS
      </Button>
    </div>
  );
};
