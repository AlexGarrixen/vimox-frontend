import React from 'react';
import { Component } from '@globalTypes/component';
import { Svg } from './styled';

export type IconProps = {
  props: {
    size?: 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | number;
    colorScheme?: 'primary' | 'white' | 'danger';
    color?: string;
    height?: number | string;
    width?: number | string;
  };
  element: 'svg';
};

export const createIcon = (path?: React.ReactNode) => {
  const Icon: Component<IconProps> = ({
    size = '1x',
    color,
    colorScheme,
    height = '1em',
    width = '1em',
    viewBox = '0 0 1024 1024',
    fill = 'currentColor',
    ...rest
  }) => (
    <Svg
      {...rest}
      size={size}
      color={color}
      colorScheme={colorScheme}
      height={height}
      width={width}
      viewBox={viewBox}
      fill={fill}
    >
      {path}
    </Svg>
  );

  return Icon;
};
