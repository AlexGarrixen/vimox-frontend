import React, { forwardRef } from 'react';
import { ComponentWithRef } from '@globalTypes/component';
import { ButtonBaseRoot } from './styled';

export const ButtonBase: ComponentWithRef<ButtonBaseTypeMap> = forwardRef(
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

// eslint-disable-next-line @typescript-eslint/ban-types
export type ButtonBaseTypeMap<P = {}> = {
  props: {
    as?: React.ElementType | string;
    colorScheme?: 'primary' | 'secondary' | 'danger';
    color?: string;
    bgColor?: string;
  } & P;
  element: 'button';
};

ButtonBase.displayName = 'ButtonBase';
