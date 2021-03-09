import type { State, Actions } from './types';

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'SHOW_SEARCH_FINDER':
      return {
        ...state,
        searchFinder: {
          visible: true,
        },
      };
    case 'HIDE_SEARCH_FINDER':
      return {
        ...state,
        searchFinder: {
          visible: false,
        },
      };
    default:
      return state;
  }
};
