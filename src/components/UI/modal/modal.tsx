import React, { MouseEventHandler } from "react";
import ReactDOM from "react-dom";
import { Backdrop, Overlay } from "./style";

type ModalProps = {
  isVisible: boolean;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: React.ReactNode;
};

export const Modal = ({
  isVisible,
  onBackdropClick,
  children,
}: ModalProps): JSX.Element | null => {
    
  const modal: JSX.Element = (
    <Backdrop onClick={onBackdropClick}>
      <Overlay onClick={onBackdropClick}>
      {children}
      </Overlay>
    </Backdrop>
  );

  return isVisible ? ReactDOM.createPortal(modal, document.body) : null;
};