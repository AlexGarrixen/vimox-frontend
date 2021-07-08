import React, { forwardRef } from 'react';
import { ComponentWithRef } from '@globalTypes/component';
import { InputBaseBox, Input, Adornment } from './styled';

export const InputBase: ComponentWithRef<InputBaseTypeMap> = forwardRef(
  (
    {
      as,
      size,
      error,
      disabled,
      adornment,
      fullWidth,
      bottomComponent,
      ...rest
    },
    ref
  ) => (
    <InputBaseBox
      size={size}
      error={error}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      <Input {...rest} as={as} ref={ref} disabled={disabled} />
      {adornment && <Adornment>{adornment}</Adornment>}
    </InputBaseBox>
  )
);

// eslint-disable-next-line @typescript-eslint/ban-types
export type InputBaseTypeMap<P = {}> = {
  props: {
    as?: React.ElementType | string;
    size?: 'sm' | 'md';
    error?: boolean;
    disabled?: boolean;
    adornment?: React.ReactNode;
    fullWidth?: boolean;
    bottomComponent?: React.ReactNode;
  } & P;
  element: 'input';
};

InputBase.displayName = 'InputBase';
InputBase.defaultProps = {
  size: 'md',
};
