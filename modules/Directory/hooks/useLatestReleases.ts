import { useContext } from 'react';
import { Context } from '@modules/Directory/contexts/Store';

const useLatestReleases = () => {
  const { latestReleases } = useContext(Context);
  return latestReleases;
};

export default useLatestReleases;
