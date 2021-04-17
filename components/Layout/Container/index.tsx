import React from 'react';
import styled, { css } from 'styled-components';

type ContainerProps = {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ theme }) => theme.screens.lg};
  margin: 0 auto;
  padding: 0 24px;

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${({ theme }) => theme.screens[maxWidth]};
    `}
`;
