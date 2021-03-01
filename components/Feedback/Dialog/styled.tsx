import styled, { css } from 'styled-components';
import type { DialogProps } from './index';

export const ContentBox = styled.div<Pick<DialogProps, 'maxWidth'>>`
  width: 100%;
  max-width: ${({ theme }) => theme.screens.md};
  height: 100%;
  margin: 0 auto;
  overflow: hidden;

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}px;
    `}
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10;
`;
