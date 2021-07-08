import React, { FC } from 'react';

const styles: React.CSSProperties = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

export const Truncate: FC = ({ children: childrenProp }) => {
  const children = React.Children.map(childrenProp, (child) =>
    React.cloneElement(child as JSX.Element, { style: styles })
  );

  return <>{children}</>;
};
