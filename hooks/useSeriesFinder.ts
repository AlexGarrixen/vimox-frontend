import React from 'react';
import { ContextApp } from '@contexts/GlobalApp';

export const useSeriesFinder = () => {
  const { state, dispatch } = React.useContext(ContextApp);

  const isVisible = state.searchFinder.visible;

  const showSeriesFinder = () => dispatch({ type: 'SHOW_SEARCH_FINDER' });

  const hideSeriesFinder = () => dispatch({ type: 'HIDE_SEARCH_FINDER' });

  return {
    showSeriesFinder,
    hideSeriesFinder,
    isVisible,
  };
};
