import styled from 'styled-components';
import { ButtonBase, ButtonBaseTypeMap } from '@components/Form/ButtonBase';
import { ComponentWithRef } from '@globalTypes/component';

export const IconButtonRoot = styled<
  ComponentWithRef<ButtonBaseTypeMap<{ size?: 'sm' | 'md' | 'lg' }>>
>(ButtonBase)`
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ size }) =>
    size === 'sm' &&
    `
      width: 30px;
      height: 30px;
    `}

  ${({ size }) =>
    size === 'md' &&
    `
      width: 40px;
      height: 40px;
    `}

  ${({ size }) =>
    size === 'lg' &&
    `
      width: 48px;
      height: 48px;
    `}
`;
