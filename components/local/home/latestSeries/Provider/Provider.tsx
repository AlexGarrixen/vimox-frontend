import React from 'react';
import { Context } from './Context';
import { useCarousel } from './hook';
import { ResponseGetSeries } from '@globalTypes/serieServices';

type ProviderProps = {
  series: ResponseGetSeries['series'];
};

export const Provider: React.FC<ProviderProps> = ({ children, series }) => {
  const props = useCarousel();
  const contextValue = React.useMemo(() => ({ ...props, series }), [
    props,
    series,
  ]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
