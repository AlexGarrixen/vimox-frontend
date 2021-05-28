import styled, { DefaultTheme, css } from 'styled-components';

type Breakpoints = Partial<Record<keyof DefaultTheme['screens'], number>>;

type SpacingProps = {
  size?: number | Breakpoints;
};

const setSpacing = (size) => css`
  padding-top: ${size}px;
`;

const setBreakpointsSpacing = (
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

export const Spacing = styled.span<SpacingProps>`
  display: block;

  ${({ theme, size }) =>
    size &&
    (typeof size === 'number'
      ? setSpacing(size)
      : setBreakpointsSpacing(size, theme))}
`;
