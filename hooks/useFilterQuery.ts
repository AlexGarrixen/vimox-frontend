import { useRouter } from 'next/router';
import qs from 'query-string';

export const useFilterQuery = () => {
  const router = useRouter();

  const recoverFilterQuerys = () => qs.parse(router.asPath.split('?')[1] || '');

  const setFilterQuery = (
    name: string,
    value: string | number,
    opts: { removeInMatchValue?: string | number } = {}
  ) => {
    const querys = recoverFilterQuerys();

    if (value === opts?.removeInMatchValue) {
      delete querys[name];
      router.push(router.pathname, { query: querys });
    } else {
      router.push(router.pathname, { query: { ...querys, [name]: value } });
    }
  };

  return {
    recoverFilterQuerys,
    setFilterQuery,
  };
};
