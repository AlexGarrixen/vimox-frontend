import { DefaultTheme, css } from 'styled-components';
import { Breakpoints } from '.';

export const setSpacing = (size) => css`
  padding-top: ${size}px;
`;

export const setBreakpointsSpacing = (
  breakpointsConfig: Breakpoints,
  theme: DefaultTheme
) => {
  const screens = Object.keys(breakpointsConfig);
  const rules: string[] = [];

  for (const screen of screens) {
    const breakpoint = theme.screens[screen];

    if (breakpoint) {
      const value = breakpointsConfig[screen];
      const rule = `
        @media (min-width: ${breakpoint}) {
          padding-top: ${value}px;
        }
      `;

      rules.push(rule);
    }
  }

  return css`
    ${rules.join(' ')}
  `;
};
