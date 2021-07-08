import styled, { DefaultTheme } from 'styled-components';
import { setCols, setBreakpointsCols } from './helpers';

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
