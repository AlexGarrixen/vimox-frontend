import { useContext } from 'react';
import { Context } from '../contexts/Store';

const useLatestSeries = () => {
  const { latestSeries } = useContext(Context);
  return latestSeries;
};

export default useLatestSeries;
