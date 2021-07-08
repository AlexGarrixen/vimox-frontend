import styled from 'styled-components';
import _get from 'lodash.get';
import { ButtonBaseTypeMap } from './';

export const ButtonBaseRoot = styled.button<ButtonBaseTypeMap['props']>`
  border: none;
  transition-property: transform;
  transition-duration: 250ms;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.base};

  ${({ colorScheme, theme }) =>
    colorScheme === 'primary' &&
    `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `}

  ${({ colorScheme, theme }) =>
    colorScheme === 'secondary' &&
    `
    background-color: ${theme.colors.gray[400]};
    color: ${theme.colors.gray[200]};
  `}

  ${({ colorScheme, theme }) =>
    colorScheme === 'danger' &&
    `
    background-color: ${theme.colors.danger};
    color: ${theme.colors.white};
  `}

  ${({ bgColor, theme }) =>
    bgColor &&
    `
    background-color: ${_get(theme.colors, bgColor) || bgColor};
  `}

  ${({ color, theme }) =>
    color &&
    `
    color: ${_get(theme.colors, color) || color};
  `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
  &:active {
    transform: scale(0.9);
  }
`;
