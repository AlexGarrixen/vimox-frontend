import React from 'react';

type Settings = {
  onOutsideClick?: () => void;
};

export const useOutsideClick = ({ onOutsideClick }: Settings = {}) => {
  const ref = React.useRef<Element | any>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      onOutsideClick && onOutsideClick();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  }, []);

  return {
    ref,
  };
};
