import React, { MouseEventHandler } from 'react'
import { Overlay } from './style'

interface ModalProps {
  onBackdropClick: () => void;
  children: React.ReactNode;
}

const stopPropagation: MouseEventHandler<HTMLDivElement> = e => {
  e.persist();
  e.stopPropagation();
};

export const Modal: React.FC<ModalProps> = ({ onBackdropClick, children }) => {
  return (
    <>
      <Overlay onClick={onBackdropClick}>
        <div onClick={stopPropagation}>{children}</div>
      </Overlay>
    </>
  );
};
