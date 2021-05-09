import React from 'react';
import { Context } from './Context';
import { useCarousel } from './hook';
import type { GetSeriesResponse } from '@globalTypes/serieServices';

type ProviderProps = {
  data: GetSeriesResponse['series'];
};

export const Provider: React.FC<ProviderProps> = ({ children, data }) => {
  const props = useCarousel();
  const contextValue = React.useMemo(() => ({ ...props, data }), [props, data]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
