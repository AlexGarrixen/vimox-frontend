import React from 'react';
import { Context } from './Context';
import { ContextValue } from './types';

type ProviderProps = ContextValue & {
  children?: React.ReactNode;
};

export const Provider = ({
  children,
  episode,
  episodesSerie,
}: ProviderProps) => {
  const contextValue = React.useMemo(
    () => ({
      episode,
      episodesSerie,
    }),
    [episode, episodesSerie]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
