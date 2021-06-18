import React from 'react';
import { ComponentWithRef } from '@globalTypes/component';
import { InputBaseBox, Input, Adornment } from './styled';

// eslint-disable-next-line @typescript-eslint/ban-types
export type InputBaseProps<P = {}> = {
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

export const InputBase: ComponentWithRef<InputBaseProps> = React.forwardRef(
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

InputBase.displayName = 'InputBase';
InputBase.defaultProps = {
  size: 'md',
};
