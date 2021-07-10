import styled from 'styled-components';
import _get from 'lodash.get';
import { AvatarTypeMap } from './';

const sizes = {
  sm: 24,
  md: 40,
  lg: 56,
};

export const AvatarRoot = styled.div<AvatarTypeMap['props']>`
  width: 30px;
  height: 30px;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.base[0]};
  border-radius: 999px;
  overflow: hidden;

  ${({ bgColor, theme }) =>
    bgColor &&
    `
   background-color: ${_get(theme.colors, bgColor) || bgColor};
  `};

  ${({ size }) =>
    size &&
    `
    width: ${typeof size === 'number' ? size : sizes[size]}px;
    height: ${typeof size === 'number' ? size : sizes[size]}px;
  `};

  ${({ size, theme }) =>
    size === 'sm' &&
    `
    font-size: ${theme.fontSize.sm[0]};
  `};
`;

export const Media = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Letter = styled.span`
  font-size: inherit;
  font-weight: bold;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
