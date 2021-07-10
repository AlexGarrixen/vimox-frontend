import { useContext } from 'react';
import { Context } from '@modules/Watch/contexts/WatchStore';

const useEpisode = () => {
  const { episode } = useContext(Context);
  return episode;
};

export default useEpisode;
