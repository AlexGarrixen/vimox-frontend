import { useContext } from 'react';
import { Context } from '@modules/Directory/contexts/Store';

const useLatestReleasesPagination = () => {
  const { pagination } = useContext(Context);
  return pagination;
};

export default useLatestReleasesPagination;
