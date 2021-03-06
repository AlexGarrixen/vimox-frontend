import React from 'react';
import qs from 'query-string';
import { useRouter } from 'next/router';
import { DirectoryContext } from './Context';

export type Querys = {
  type?: string;
  gener?: string;
};

type DirectoryProviderProps = {
  children?: React.ReactNode;
  initialQuerys: Querys;
};

export const DirectoryProvider = ({
  initialQuerys,
  children,
}: DirectoryProviderProps) => {
  const [querys, setQuerys] = React.useState({
    type: initialQuerys.type || '',
    gener: initialQuerys.gener || '',
  });

  const router = useRouter();

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const { query } = qs.parseUrl(router.asPath);
      setQuerys({ ...querys, ...query });
    }

    isMounted.current = true;
  }, [router.query]);

  return (
    <DirectoryContext.Provider value={{ querys }}>
      {children}
    </DirectoryContext.Provider>
  );
};
