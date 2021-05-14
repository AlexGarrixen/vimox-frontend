import React from 'react';
import { useSession } from '@contexts/Auth/hooks';
import { Serie } from '@globalTypes/serieServices';
import { Context } from './Context';
import { ContextValue } from './types';

type ProviderProps = {
  children?: React.ReactNode;
  addedByUsers: Serie['addedByUsers'];
} & Omit<ContextValue, 'addedInQueue' | 'setAddedInQueue'>;

export const Provider = ({
  children,
  serieId,
  serieName,
  addedByUsers,
}: ProviderProps) => {
  const [session] = useSession();
  const addedInQueue = React.useMemo(
    () => (!session ? false : Boolean(addedByUsers[session.user._id])),
    [session, addedByUsers]
  );

  const contextValue = React.useMemo(
    () => ({
      serieId,
      serieName,
      addedInQueue,
    }),
    [serieId, serieName, addedByUsers, addedInQueue]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
