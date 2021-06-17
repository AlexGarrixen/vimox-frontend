import React from 'react';

export const usePreviousValue = <Value = unknown>(value: Value) => {
  const refValue = React.useRef(undefined);

  React.useEffect(() => {
    refValue.current = value;
  }, [value]);

  return refValue.current;
};
