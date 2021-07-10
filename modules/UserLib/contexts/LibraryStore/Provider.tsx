import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { Context } from './Context';
import { useSession } from '@contexts/Auth/hooks';
import { getListOfSeries } from '@services/user';

export const ProviderLibraryStore: FC = ({ children }) => {
  const [session] = useSession();

  const queryQueuedSeries = useQuery(
    ['user-series', session.user._id],
    () => getListOfSeries(session.user._id),
    {
      cacheTime: 900000,
    }
  );

  return (
    <Context.Provider
      value={{
        queuedSeries: queryQueuedSeries,
      }}
    >
      {children}
    </Context.Provider>
  );
};
