import React from 'react';
import { useSession } from '@contexts/Auth/hooks';
import { ResponseGetOneSerie } from '@globalTypes/serieServices';
import { Context } from './Context';

type ProviderProps = {
  children?: React.ReactNode;
  data?: ResponseGetOneSerie;
};

export const Provider = ({ children, data }: ProviderProps) => {
  const [session] = useSession();
  const { isInQueue, ...restData } = data || {};
  const contextValue = React.useMemo(
    () => ({
      ...restData,
      isInQueue: !session ? false : isInQueue,
    }),
    [data]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
