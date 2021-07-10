import styled from 'styled-components';
import { ButtonBase, ButtonBaseTypeMap } from '@components/Form/ButtonBase';
import { ComponentWithRef } from '@globalTypes/component';

export const ButtonRoot = styled<
  ComponentWithRef<
    ButtonBaseTypeMap<{ size?: 'sm' | 'md'; fullWidth?: boolean }>
  >
>(ButtonBase)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  ${({ size }) =>
    size === 'md' &&
    `
    padding: 10px 16px;
  `}

  ${({ size, theme }) =>
    size === 'sm' &&
    `
    padding: 6px 12px;
    font-size: ${theme.fontSize.sm[0]};
  `}
`;

export const Label = styled.span`
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
`;

export const StartIcon = styled.span`
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
`;

export const EndIcon = styled.span`
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
`;
