import { useContext } from 'react';
import { Context } from '../contexts/HomeSlidesControl';

const useSlidesNavigation = () => {
  const state = useContext(Context);
  return state;
};

export default useSlidesNavigation;
