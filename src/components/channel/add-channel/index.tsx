import React, { useState } from 'react';
import Button from 'components/UI/button';
import BaseModalWrapper from 'components/UI/modal/modal-wrapper';
import { ButtonContainer, InputElement } from './style';
import { useDispatch } from 'react-redux';
import { months } from 'helpers/constants';
import { useNavigate } from 'react-router-dom';
import { v4 } from "uuid";

export interface AddChannelArgs {
  channelName: string;
}

interface AddChannelModalProps {
  onClose: () => void;
  isModalVisible: boolean;
}

const AddChannelModal: React.FC<AddChannelModalProps> = ({
  isModalVisible,
  onClose,
}) => {
  const [channelName, setChannelName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newChannel = {
        name: channelName,
        allocation: "Equal",
        frequency: "Annualy",
        amount: 0,
        months: months,
        id: v4(),
      }
      dispatch({
        type: 'ADD_CHANNEL',
        payload: newChannel
      });
      setChannelName('');
      onClose();
      navigate('tab1');
    }
  }

  const handleClose = () => {
    setChannelName('');
    onClose();
  }

  const handleAdd = () => {
    const newChannel = {
      name: channelName,
      allocation: "Equal",
      frequency: "Annualy",
      amount: 0,
      months: months,
      id: v4(),
    }
    dispatch({
      type: 'ADD_CHANNEL',
      payload: newChannel
    });
    setChannelName('');
    onClose();
    navigate('tab1');
  }

  return (
    <BaseModalWrapper
      onBackdropClick={onClose}
      isModalVisible={isModalVisible}
      header="Enter channelName"
      ContainerComponent={
        () => (
          <>
            <InputElement
              value={channelName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChannelName(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Enter channel name"
              autoFocus />
            <ButtonContainer>
              <Button onClick={handleAdd}>Add Channel</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </ButtonContainer>
          </>
        )
      }
    />
  );
};

export default AddChannelModal;
