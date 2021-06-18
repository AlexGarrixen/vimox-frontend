import React from 'react';
import { ButtonBaseProps } from '@components/Form/ButtonBase';
import { ComponentWithRef } from '@globalTypes/component';
import { ButtonRoot, Label, StartIcon, EndIcon } from './styled';

export type ButtonProps = {
  props: {
    size?: 'sm' | 'md';
    fullWidth?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  } & ButtonBaseProps['props'];
  element: 'button';
};

export const Button: ComponentWithRef<ButtonProps> = React.forwardRef(
  ({ size, children, startIcon, endIcon, fullWidth, ...rest }, ref) => (
    <ButtonRoot {...rest} size={size} fullWidth={fullWidth} ref={ref}>
      {startIcon && <StartIcon>{startIcon}</StartIcon>}
      <Label>{children}</Label>
      {endIcon && <EndIcon>{endIcon}</EndIcon>}
    </ButtonRoot>
  )
);

Button.displayName = 'Button';
Button.defaultProps = {
  size: 'md',
  colorScheme: 'primary',
};
