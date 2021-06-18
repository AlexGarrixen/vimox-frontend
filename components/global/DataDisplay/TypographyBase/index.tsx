import React from 'react';
import { DefaultTheme } from 'styled-components';
import { Component } from '@globalTypes/component';
import { TitleRoot } from './styled';

export type TypographyProps = {
  props: {
    as?: React.ElementType | string;
    colorScheme?: 'primary' | 'secondary' | 'danger' | 'white';
    color?: string;
    size?:
      | keyof DefaultTheme['fontSize']
      | Partial<
          Record<keyof DefaultTheme['screens'], keyof DefaultTheme['fontSize']>
        >;
  };
  element: 'p';
};

export const TypographyBase: Component<TypographyProps> = ({
  as,
  colorScheme,
  color,
  size,
  ...rest
}) => (
  <TitleRoot
    as={as}
    size={size}
    color={color}
    colorScheme={colorScheme}
    {...rest}
  />
);
