import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { BoredomFetch } from '../interfaces';
import { fetchData } from '../services/boredom';

export const Homepage = () => {
  const [idea, setIdea] = useState<BoredomFetch>();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData(setIdea, setError);
  }, []);

  const newFetch = () => {
    fetchData(setIdea, setError);
  };
  console.log(idea);
  return (
    <div className="center">
      <h2>If you have nothing else todo, you can try this:</h2>
      <p>{idea?.activity}</p>
      <Button
        variant="outlined"
        size="large"
        color="secondary"
        onClick={newFetch}
      >
        GET MORE IDEAS
      </Button>
    </div>
  );
};
