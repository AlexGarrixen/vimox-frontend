import React from 'react';
import { Overlay } from '@components/Overlays/Overlay';
import { Portal } from '@components/Overlays/Portal';
import { CloseFilled } from '@components/Icon/CloseFilled';
import { useOutsideClick } from '@hooks/useOutsideClick';
import { ModalContent, CloseButton } from './styled';

export const Modal = ({
  children,
  onRequestClose,
  isOpen,
  maxW,
  verticalScroll = true,
}: ModalProps) => {
  const { ref } = useOutsideClick({ onOutsideClick: onRequestClose });

  return isOpen ? (
    <Portal>
      <Overlay>
        <CloseButton>
          <CloseFilled colorScheme='white' size='2x' />
        </CloseButton>
        <ModalContent ref={ref} maxW={maxW} verticalScroll={verticalScroll}>
          {children}
        </ModalContent>
      </Overlay>
    </Portal>
  ) : null;
};

export type ModalProps = {
  children?: React.ReactNode;
  onRequestClose?: () => void;
  isOpen?: boolean;
  maxW?: 'sm' | 'md' | 'lg' | number;
  verticalScroll?: boolean;
};
