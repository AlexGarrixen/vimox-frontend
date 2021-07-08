import React, { forwardRef } from 'react';
import { ButtonBaseTypeMap } from '@components/Form/ButtonBase';
import { ComponentWithRef } from '@globalTypes/component';
import { ButtonRoot, Label, StartIcon, EndIcon } from './styled';

export const Button: ComponentWithRef<ButtonTypeMap> = forwardRef(
  ({ size, children, startIcon, endIcon, fullWidth, ...rest }, ref) => (
    <ButtonRoot {...rest} size={size} fullWidth={fullWidth} ref={ref}>
      {startIcon && <StartIcon>{startIcon}</StartIcon>}
      <Label>{children}</Label>
      {endIcon && <EndIcon>{endIcon}</EndIcon>}
    </ButtonRoot>
  )
);

export type ButtonTypeMap = {
  props: {
    size?: 'sm' | 'md';
    fullWidth?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  } & ButtonBaseTypeMap['props'];
  element: 'button';
};

Button.displayName = 'Button';
Button.defaultProps = {
  size: 'md',
  colorScheme: 'primary',
};
