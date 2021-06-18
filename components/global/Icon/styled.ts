import styled, { DefaultTheme } from 'styled-components';
import { IconProps } from './createIcon';
import _get from 'lodash.get';

const sizes = {
  xs: 0.75,
  sm: 0.875,
  '1x': 1,
  '2x': 2,
  '3x': 3,
  '4x': 4,
};

const setColorScheme = (
  colorScheme: IconProps['props']['colorScheme'],
  theme: DefaultTheme
) => {
  const { colors } = theme;
  const colorsScheme = {
    primary: colors.primary,
    danger: colors.danger,
    white: colors.white,
  };

  const color = colorsScheme[colorScheme];

  if (color) return `color: ${color};`;
  return '';
};

export const Svg = styled.svg<IconProps['props']>`
  fill: currentColor;
  width: 1em;
  height: 1em;
  font-size: 1rem;

  & path {
    color: currentColor;
  }

  ${({ size }) =>
    size &&
    `
    font-size: ${typeof size === 'number' ? `${size}px` : `${sizes[size]}rem`};
  `}

  ${({ colorScheme, theme }) =>
    colorScheme && setColorScheme(colorScheme, theme)}

  ${({ color, theme }) =>
    color &&
    `
      color: ${_get(theme.colors, color)};
    `}
`;
