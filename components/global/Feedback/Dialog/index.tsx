import React from 'react';
import Modal from 'react-modal';
import { Close } from '@components/Icon/Close';
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
      <Close color='#fff' xxl />
    </CloseButton>
    <ContentBox maxWidth={maxWidth}>{children}</ContentBox>
  </Modal>
);
