import React from 'react';

export type ContextAppValue = {
  state: State;
  dispatch: React.Dispatch<Actions>;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type State = {
  searchFinder: {
    visible: boolean;
  };
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Actions =
  | {
      type: 'SHOW_SEARCH_FINDER';
    }
  | {
      type: 'HIDE_SEARCH_FINDER';
    };
