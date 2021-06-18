import React from 'react';
import { ComponentWithRef } from '@globalTypes/component';
import { ButtonBaseRoot } from './styled';

// eslint-disable-next-line @typescript-eslint/ban-types
export type ButtonBaseProps<P = {}> = {
  props: {
    as?: React.ElementType | string;
    colorScheme?: 'primary' | 'secondary' | 'danger';
    color?: string;
    bgColor?: string;
  } & P;
  element: 'button';
};

export const ButtonBase: ComponentWithRef<ButtonBaseProps> = React.forwardRef(
  ({ as, colorScheme, color, bgColor, ...rest }, ref) => {
    return (
      <ButtonBaseRoot
        {...rest}
        as={as}
        colorScheme={colorScheme}
        color={color}
        bgColor={bgColor}
        ref={ref}
      />
    );
  }
);

ButtonBase.displayName = 'ButtonBase';
