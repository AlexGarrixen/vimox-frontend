import React from 'react';
import { ContextApp } from './ContextApp';
import { reducer } from './reducer';
import { initialState } from './initialState';

type ProviderAppProps = {
  children?: React.ReactNode;
};

export const ProviderApp = ({ children }: ProviderAppProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      {children}
    </ContextApp.Provider>
  );
};
