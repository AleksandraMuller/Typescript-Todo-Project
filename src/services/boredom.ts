import { BoredomFetch } from '../interfaces';

export const fetchData = async (setIdea: any, setError: any) => {
  const resp = await fetch(`https://www.boredapi.com/api/activity`);
  const json = await resp.json();
  if (json.status_code === 34) {
    setError(true);
  } else {
    setIdea({ ...json });
  }
};
