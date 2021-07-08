import styled from 'styled-components';
import _get from 'lodash.get';
import { setSize, setBreakpointsSize, setColorScheme } from './helpers';
import { TypographyTypeMap } from '.';

export const TitleRoot = styled.p<TypographyTypeMap['props']>`
  ${({ size, theme }) =>
    size !== undefined
      ? typeof size === 'string'
        ? setSize(size, theme)
        : setBreakpointsSize(size, theme)
      : ''}

  ${({ colorScheme, theme }) =>
    colorScheme && setColorScheme(colorScheme, theme)}

  ${({ color, theme }) =>
    color &&
    `
    color: ${_get(theme.colors, color) || color};
  `}
`;
