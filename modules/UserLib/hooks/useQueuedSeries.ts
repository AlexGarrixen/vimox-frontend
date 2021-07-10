import { useContext } from 'react';
import { Context } from '@modules/UserLib/contexts/LibraryStore';

const useQueuedSeries = () => {
  const { queuedSeries } = useContext(Context);
  return queuedSeries;
};

export default useQueuedSeries;
