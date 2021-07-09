import { useContext } from 'react';
import { Context } from '../contexts/Store';

const useLatestEpisodes = () => {
  const { latestEpisodes } = useContext(Context);
  return latestEpisodes;
};

export default useLatestEpisodes;
