import React from 'react';
import Modal from 'react-modal';
import { CloseFilled } from '@components/Icon/CloseFilled';
import { ContentBox, CloseButton } from './styled';

Modal.setAppElement('#__next');

export type DialogProps = {
  children?: React.ReactNode;
  isOpen?: boolean;
  onRequestClose?: () => void;
  maxWidth?: number;
};

export const Dialog = ({
  children,
  isOpen,
  onRequestClose,
  maxWidth,
}: DialogProps) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className='ContentModal'
    overlayClassName='OverlayModal'
  >
    <CloseButton onClick={onRequestClose}>
      <CloseFilled colorScheme='white' size='2x' />
    </CloseButton>
    <ContentBox maxWidth={maxWidth}>{children}</ContentBox>
  </Modal>
);
