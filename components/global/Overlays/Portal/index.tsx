import { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const Portal: FC = ({ children }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => setMount(true), []);

  return mount
    ? ReactDOM.createPortal(children, document.querySelector('#__next'))
    : null;
};
