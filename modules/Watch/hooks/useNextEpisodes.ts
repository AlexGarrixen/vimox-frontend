import { useContext } from 'react';
import { Context } from '@modules/Watch/contexts/WatchStore';

const useNextEpisodes = () => {
  const { nextEpisodes } = useContext(Context);
  return nextEpisodes;
};

export default useNextEpisodes;
