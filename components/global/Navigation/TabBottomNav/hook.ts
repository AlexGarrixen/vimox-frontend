import React, { useEffect } from 'react';
import { useSpring } from 'react-spring';

export const useAnimationScroll = (isMdScreen: boolean) => {
  const latestScroll = React.useRef(0);
  const [styles, set] = useSpring(() => ({
    opacity: 1,
    transform: 'translate(0px, 0px)',
  }));

  const handleScroll = React.useCallback((ev: Event) => {
    const currentScroll = window.pageYOffset;

    if (currentScroll === 0) set({ opacity: 1 });
    if (currentScroll > latestScroll.current)
      set({ opacity: 0, transform: 'translate(0px, 10px)' });
    else set({ opacity: 1, transform: 'translate(0px, 0px)' });

    latestScroll.current = currentScroll;
  }, []);

  useEffect(() => {
    if (!isMdScreen) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isMdScreen]);

  useEffect(() => {
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return styles;
};
