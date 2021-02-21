import React from 'react';
import styled, { DefaultTheme, css } from 'styled-components';

type TypographyProps = {
  size?: keyof DefaultTheme['fontSize'];
  primary?: boolean;
  white?: boolean;
  xs?: keyof DefaultTheme['fontSize'];
  sm?: keyof DefaultTheme['fontSize'];
  md?: keyof DefaultTheme['fontSize'];
  lg?: keyof DefaultTheme['fontSize'];
  xl?: keyof DefaultTheme['fontSize'];
  letterSpacing?: string;
};

export const Typography = styled.p<TypographyProps>`
  color: ${({ theme }) => theme.colors.gray[200]};

  ${({ primary }) =>
    primary &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}

  ${({ white }) =>
    white &&
    css`
      color: #fff;
    `}

  ${({ letterSpacing }) =>
    letterSpacing &&
    css`
      letter-spacing: ${letterSpacing};
    `}

  ${({ size }) =>
    size &&
    css`
      font-size: ${({ theme }) => theme.fontSize[size][0]};
    `}

  ${({ xs }) =>
    xs &&
    css`
      @media (min-width: ${({ theme }) => theme.screens.xs}) {
        font-size: ${({ theme }) => theme.fontSize[xs][0]};
      }
    `}
    
  ${({ sm }) =>
    sm &&
    css`
      @media (min-width: ${({ theme }) => theme.screens.sm}) {
        font-size: ${({ theme }) => theme.fontSize[sm][0]};
      }
    `}

  ${({ md }) =>
    md &&
    css`
      @media (min-width: ${({ theme }) => theme.screens.md}) {
        font-size: ${({ theme }) => theme.fontSize[md][0]};
      }
    `}

  ${({ lg }) =>
    lg &&
    css`
      @media (min-width: ${({ theme }) => theme.screens.lg}) {
        font-size: ${({ theme }) => theme.fontSize[lg][0]};
      }
    `}

  ${({ xl }) =>
    xl &&
    css`
      @media (min-width: ${({ theme }) => theme.screens.xl}) {
        font-size: ${({ theme }) => theme.fontSize[xl][0]};
      }
    `}
`;
