import React from 'react';
import { Context } from './Context';
import { ContextValue } from './types';

type ProviderProps = ContextValue & {
  children?: React.ReactNode;
};

export const Provider = ({
  children,
  episode,
  nextEpisode,
  prevEpisode,
}: ProviderProps) => {
  const contextValue = React.useMemo(
    () => ({
      episode,
      nextEpisode,
      prevEpisode,
    }),
    [episode, nextEpisode, prevEpisode]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
