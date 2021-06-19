import React from 'react';
import ReactDOM from 'react-dom';

export const Portal: React.FC = ({ children }) => {
  const [mount, setMount] = React.useState(false);

  React.useEffect(() => setMount(true), []);

  return mount
    ? ReactDOM.createPortal(children, document.querySelector('#__next'))
    : null;
};
