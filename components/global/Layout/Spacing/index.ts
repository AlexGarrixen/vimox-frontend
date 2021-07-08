import styled, { DefaultTheme, css } from 'styled-components';
import { setSpacing, setBreakpointsSpacing } from './helpers';

export const Spacing = styled.span<SpacingProps>`
  display: block;

  ${({ theme, size }) =>
    size &&
    (typeof size === 'number'
      ? setSpacing(size)
      : setBreakpointsSpacing(size, theme))}
`;

export type Breakpoints = Partial<
  Record<keyof DefaultTheme['screens'], number>
>;

export type SpacingProps = {
  size?: number | Breakpoints;
};
