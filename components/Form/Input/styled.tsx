import styled, { css } from 'styled-components';
import type { OwnProps } from './index';

export const InputStyled = styled.input`
  width: 100%;
  line-height: 16px;
  font-size: ${({ theme }) => theme.fontSize.sm[0]};
  background-color: ${({ theme }) => theme.colors.gray[400]};
  color: ${({ theme }) => theme.colors.gray[200]};
  padding: 12px 24px;
  border: none;
  border-radius: 6px;

  ::-ms-reveal,
  ::-ms-clear {
    display: none;
  }
`;

export const InputBox = styled.div<Pick<OwnProps, 'fullWidth' | 'error'>>`
  position: relative;
  display: inline-block;
  min-width: 250px;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  ${({ error, theme }) =>
    error &&
    `${InputStyled}{
      box-shadow: 0 0 0 1px ${theme.colors.danger}
  }`}
`;
