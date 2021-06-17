import styled, { DefaultTheme } from 'styled-components';
import _get from 'lodash.get';
import { TypographyProps } from '.';

const setSize = (size: keyof DefaultTheme['fontSize'], theme: DefaultTheme) => {
  const fontSizes = theme.fontSize;
  const fontSize = fontSizes[size];

  if (fontSize)
    return `
   font-size: ${fontSize[0]};
   line-height: ${fontSize[1]};
  `;

  return '';
};

const setBreakpointsSize = (
  breakpoints: Record<
    keyof DefaultTheme['screens'],
    keyof DefaultTheme['fontSize']
  >,
  theme: DefaultTheme
) => {
  const { screens } = theme;
  const fontSizes = theme.fontSize;
  const rules: string[] = [];

  for (const breakpoint of Object.keys(breakpoints)) {
    const screen = screens[breakpoint];
    const fontSize = fontSizes[breakpoints[breakpoint]];

    if (screen && fontSize) {
      rules.push(`
       @media screen and (min-width: ${screen}) {
         font-size: ${fontSize[0]};
         line-height: ${fontSize[1]};
       }
      `);
    }
  }

  return rules.join(' ');
};

const setColorScheme = (
  colorScheme: TypographyProps['props']['colorScheme'],
  theme: DefaultTheme
) => {
  const { colors } = theme;
  const colorsMap = {
    primary: colors.primary,
    secondary: colors.gray[200],
    danger: colors.danger,
    white: colors.white,
  };
  const color = colorsMap[colorScheme];

  if (color)
    return `
    color: ${color};
  `;

  return '';
};

export const TitleRoot = styled.p<TypographyProps['props']>`
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
