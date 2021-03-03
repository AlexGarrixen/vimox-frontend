import React from 'react';

export type ContextAppValue = {
  state: State;
  dispatch: React.Dispatch<Actions>;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type State = {};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Actions = {
  type: '';
};
