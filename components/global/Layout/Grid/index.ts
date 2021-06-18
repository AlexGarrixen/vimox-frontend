import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

const setCols = (cols: number) =>
  `grid-template-columns: repeat(${cols}, minmax(0, 1fr));`;

const setBreakpointsCols = (
  breakpoints: Partial<Record<keyof DefaultTheme['screens'], number>>,
  theme: DefaultTheme
) => {
  const screens = theme.screens;
  const rules: string[] = [];

  for (const breakpoint of Object.keys(breakpoints)) {
    const screen = screens[breakpoint];
    const cols = breakpoints[breakpoint];

    if (screen) {
      const rule = `
        @media screen and (min-width: ${screen}) {
          grid-template-columns: repeat(${cols}, minmax(0, 1fr));
        }
      `;

      rules.push(rule);
    }
  }

  return rules.join(' ');
};

type GridProps = {
  cols?: number | Partial<Record<keyof DefaultTheme['screens'], number>>;
  gap?: number;
  alignItems?: React.CSSProperties['alignItems'];
  justifyItems?: React.CSSProperties['justifyItems'];
};

export const Grid = styled.div<GridProps>`
  display: grid;

  ${({ gap }) => gap && `gap: ${gap}rem;`}

  ${({ alignItems }) =>
    alignItems &&
    `
    align-items: ${alignItems};
  `}

  ${({ justifyItems }) =>
    justifyItems &&
    `
    justify-items: ${justifyItems};
  `}

  ${({ cols, theme }) =>
    cols !== undefined
      ? typeof cols === 'number'
        ? setCols(cols)
        : setBreakpointsCols(cols, theme)
      : ''}
`;
