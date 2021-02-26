import React from 'react';

export const useMatchMedia = (media: string): boolean => {
  const [isMatchMedia, setMatchMedia] = React.useState(false);
  const mql = React.useRef<MediaQueryList>(null);

  const handleMatchMedia = ({ matches }) => setMatchMedia(matches);

  React.useEffect(() => {
    mql.current = window.matchMedia(media);
    mql.current.addEventListener('change', handleMatchMedia);
    setMatchMedia(mql.current.matches);

    return () => {
      if (mql.current) {
        mql.current.removeEventListener('change', handleMatchMedia);
        setMatchMedia(false);
      }
    };
  }, []);

  return isMatchMedia;
};

export default useMatchMedia;
