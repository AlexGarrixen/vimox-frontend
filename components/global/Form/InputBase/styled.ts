import styled from 'styled-components';
import { InputBaseTypeMap } from './';

export const InputBaseBox = styled.div<
  Omit<InputBaseTypeMap['props'], 'adornment'>
>`
  display: inline-flex;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.gray[400]};
  color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  transition-property: box-shadow;
  transition-duration: 250ms;

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  ${({ size, theme }) =>
    size === 'sm' &&
    `
    min-height: 32px;
    padding: 6px 12px;
    font-size: ${theme.fontSize.sm[0]};
  `}

  ${({ size, theme }) =>
    size === 'md' &&
    `
    font-size: ${theme.fontSize.sm[0]};
    min-height: 42px;
    padding: 8px 16px;
  `}

   ${({ error, theme }) =>
    error &&
    `
     box-shadow: 0 0 0 2px ${theme.colors.danger};
     `}

   ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.4;
      & > * {
        cursor: not-allowed;
      }
    `}

   &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

export const Input = styled.input`
  border: none;
  background-color: inherit;
  color: inherit;
  font-size: inherit;
  flex: 1;

  ::-ms-reveal,
  ::-ms-clear {
    display: none;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
  :-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.gray[200]};
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.gray[400]} inset;
    border-radius: 0;
  }
`;

export const Adornment = styled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: inherit;
`;
