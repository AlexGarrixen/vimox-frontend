import { DefaultTheme } from 'styled-components';
import _get from 'lodash.get';
import { TypographyTypeMap } from '.';

export const setSize = (
  size: keyof DefaultTheme['fontSize'],
  theme: DefaultTheme
) => {
  const fontSizes = theme.fontSize;
  const fontSize = fontSizes[size];

  if (fontSize)
    return `
   font-size: ${fontSize[0]};
   line-height: ${fontSize[1]};
  `;

  return '';
};

export const setBreakpointsSize = (
  breakpoints: Partial<
    Record<keyof DefaultTheme['screens'], keyof DefaultTheme['fontSize']>
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

export const setColorScheme = (
  colorScheme: TypographyTypeMap['props']['colorScheme'],
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
