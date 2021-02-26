import styled, { css } from 'styled-components';

type Cols =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

type GridProps = {
  gap?: number;
  cols?: Cols;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  xl?: Cols;
};

export const Grid = styled.div<GridProps>`
  display: grid;

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}rem;
    `}

  ${({ cols }) =>
    cols &&
    css`
      grid-template-columns: repeat(${cols}, minmax(0, 1fr));
    `}

  ${({ xs }) =>
    xs &&
    css`
      @media (min-width: ${({ theme }) => theme.screens.xs}) {
        grid-template-columns: repeat(${xs}, minmax(0, 1fr));
      }
    `}

  ${({ sm }) =>
    sm &&
    css`
      @media (min-width: ${({ theme }) => theme.screens.sm}) {
        grid-template-columns: repeat(${sm}, minmax(0, 1fr));
      }
    `}

  ${({ md }) =>
    md &&
    css`
      @media (min-width: ${({ theme }) => theme.screens.md}) {
        grid-template-columns: repeat(${md}, minmax(0, 1fr));
      }
    `}

  ${({ lg }) =>
    lg &&
    css`
      @media (min-width: ${({ theme }) => theme.screens.lg}) {
        grid-template-columns: repeat(${lg}, minmax(0, 1fr));
      }
    `}

  ${({ xl }) =>
    xl &&
    css`
      @media (min-width: ${({ theme }) => theme.screens.xl}) {
        grid-template-columns: repeat(${xl}, minmax(0, 1fr));
      }
    `}
`;
