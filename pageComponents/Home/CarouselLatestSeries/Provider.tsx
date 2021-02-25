import React from 'react';
import { Context } from './Context';
import { useCarousel } from './hook';

export const Provider: React.FC = ({ children }) => {
  const props = useCarousel();

  return <Context.Provider value={props}>{children}</Context.Provider>;
};
