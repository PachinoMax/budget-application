import React, { ReactNode } from 'react'
import { Modal } from 'components/UI/modal';

export interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
  header: string;
}

interface ComponentsProps {
  ContainerComponent: React.FunctionComponent<{ children: ReactNode }>;
}

type Props = BaseModalWrapperProps & ComponentsProps;

const BaseModalWrapper: React.FC<Props> = ({ContainerComponent, isModalVisible, onBackdropClick, header }) => {

  if (!isModalVisible) {
    return null
  }

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <ContainerComponent>
        <div>{header}</div>
      </ContainerComponent>
    </Modal>);
}

export default BaseModalWrapper