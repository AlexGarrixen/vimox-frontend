import styled, { keyframes } from 'styled-components';
import { ModalProps } from './';

const animation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.05)
  }
  85% {
    opacity: 1
    transform: scale(1)
  }
`;

export const ModalContent = styled.div<
  Pick<ModalProps, 'maxW' | 'verticalScroll'>
>`
  width: 100%;
  max-width: ${({ theme }) => theme.screens.md};
  background-color: ${({ theme }) => theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100%;
  animation: ${animation} 350ms;

  ${({ maxW, theme }) =>
    maxW &&
    maxW !== 'md' &&
    `max-width: ${
      typeof maxW === 'number' ? `${maxW}px` : theme.screens[maxW]
    }`};

  ${({ verticalScroll }) => !verticalScroll && 'overflow-y: hidden'}
`;

export const CloseButton = styled.span`
  background: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
