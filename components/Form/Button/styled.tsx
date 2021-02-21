import styled, { css } from 'styled-components';
import type { ButtonProps } from './index';

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.gray[400]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-weight: 600;
  padding: 10px 24px;
  cursor: pointer;
  border-radius: 6px;
  transition: 250ms transform;

  :active {
    transform: scale(0.9);
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

export const LabelText = styled.span<Pick<ButtonProps, 'primary'>>`
  color: ${({ theme, primary }) => (primary ? '#fff' : theme.colors.gray[200])};
  font-size: ${({ theme }) => theme.fontSize.sm[0]};
`;

export const StartIcon = styled.span`
  margin-right: 8px;
`;

export const EndIcon = styled.span`
  margin-left: 8px;
`;
