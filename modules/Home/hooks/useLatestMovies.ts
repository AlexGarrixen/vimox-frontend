import { useContext } from 'react';
import { Context } from '../contexts/Store';

const useLatestMovies = () => {
  const { latestMovies } = useContext(Context);
  return latestMovies;
};

export default useLatestMovies;
