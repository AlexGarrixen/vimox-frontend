import React from 'react';

const styles: React.CSSProperties = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

export const Truncate = ({
  children: childrenProp,
}: {
  children?: React.ReactNode;
}) => {
  const children = React.Children.map(childrenProp, (child) =>
    React.cloneElement(child as JSX.Element, { style: styles })
  );

  return <>{children}</>;
};
