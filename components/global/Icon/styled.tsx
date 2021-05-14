import styled, { css } from 'styled-components';
import type { SvgProps } from './types';

export const Svg = styled.svg<SvgProps>`
  font-size: ${({ theme }) => theme.fontSize.base[0]};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}

  ${({ sm }) =>
    sm &&
    css`
      font-size: ${({ theme }) => theme.fontSize.sm[0]};
    `};

  ${({ lg }) =>
    lg &&
    css`
      font-size: ${({ theme }) => theme.fontSize.lg[0]};
    `};

  ${({ xl }) =>
    xl &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl[0]};
    `};

  ${({ xxl }) =>
    xxl &&
    css`
      font-size: ${({ theme }) => theme.fontSize['3xl'][0]};
    `};

  ${({ xxxl }) =>
    xxxl &&
    css`
      font-size: ${({ theme }) => theme.fontSize['4xl'][0]};
    `};
`;
