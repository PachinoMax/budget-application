import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import TableDots from "components/UI/table/table-dots";
import UpDownToggle from "components/UI/toogle/up-down-toogle/up-down-toggle";
import { ChannelContainer, ChannelIcon, ChannelTitle, BudgetContainer } from "./style";
import BudgetSetting from "./budget-setting";
import Breakdown from "./breakdown";
import { IChannel } from "redux/interfaces";

export default function Channel(props: { channel: IChannel }): ReactElement {
  const dispatch = useDispatch();
  const [name, setName] = useState(props.channel.name);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const openChannel = () => {
    setIsOpen(!isOpen);
  }

  const onEdit = () => {
    setIsEdit(true);
  }

  const onDelete = () => {
    dispatch({ type: "DELETE_CHANNEL", payload: props.channel.id });
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch({
        type: 'EDIT_CHANNEL_NAME',
        payload: { id: props.channel.id, name: name }
      })
      setIsEdit(false);
    } 
  }

  return (
    <>
      <ChannelContainer>
        <UpDownToggle isUp={isOpen} onClick={openChannel} />
        <ChannelIcon />
        {!isEdit && <ChannelTitle>{name}</ChannelTitle>}
        {isEdit &&
          <input
            value={name}
            onKeyDown={onKeyDown}
            onBlur={() => { setIsEdit(false) }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => e.stopPropagation()} />
        }
        <TableDots handleDelete={onDelete} handleEdit={onEdit} />
      </ChannelContainer>
      {isOpen && (
        <BudgetContainer>
          <BudgetSetting {...props.channel} />
          <Breakdown {...props.channel} />
        </BudgetContainer>
      )}
    </>
  );
};
