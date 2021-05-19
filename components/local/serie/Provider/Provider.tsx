import React from 'react';
import { useSession } from '@contexts/Auth/hooks';
import { Context } from './Context';
import { ContextValue } from './types';

type ProviderProps = {
  children?: React.ReactNode;
  isInQueue: boolean;
} & Omit<ContextValue, 'setAddedInQueue'>;

export const Provider = ({
  children,
  serieId,
  serieName,
  isInQueue,
}: ProviderProps) => {
  const [session] = useSession();
  const contextValue = React.useMemo(
    () => ({
      serieId,
      serieName,
      isInQueue: !session ? false : isInQueue,
    }),
    [serieId, serieName, isInQueue]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
