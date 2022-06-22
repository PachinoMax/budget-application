import { useState } from "react";
import { useDispatch } from "react-redux";
import { IChannel } from "redux/interfaces";
import { useTypedSelector } from "redux/reducers";
import { getCurrentYear, getChannel } from "utils";
import { CellContainer, TableCellContainer, TableCellTitle, Item, SaveIcon, CancelIcon, EditIcon } from "./style";

type TableCellProps = {
  month: string;
  amount: number;
  allocation: string;
  channel: IChannel;
};

export default function TableCell(props: TableCellProps): React.ReactElement {
  const dispatch = useDispatch();
  const channel = useTypedSelector(getChannel(props.channel.id));
  const [isEditing, setIsEditing] = useState(false);
  const [editIconShow, setEditIconShow] = useState(false);
  const [value, setValue] = useState(props.amount);
  const [editedValue, setEditedValue] = useState(props.amount);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value.replace('$', '').split(",").join(""));
    setEditedValue(newValue);
  }

  const handleSave = () => {
    setValue(editedValue);
    const newMonth = { name: props.month, value: editedValue };
    dispatch({ type: "SET_CHANNEL_MONTH", payload: { id: props.channel.id, newMonth } });
    setIsEditing(false);
  }

  return (
    <CellContainer
    onMouseEnter={() => !isEditing && setEditIconShow(true)}
    onMouseLeave={() => setEditIconShow(false)}
    >
      <TableCellContainer>
        <TableCellTitle>
          {props.month} {` `} {getCurrentYear()}
        </TableCellTitle>
        <Item
          value={isEditing ? editedValue : value}
          disabled={channel?.allocation === "Equal" || !isEditing}
          allowLeadingZeros={false}
          isNumericString={true}
          allowNegative={false}
          thousandSeparator={true}
          prefix="$"
          onChange={handleChange}
          isEditing={isEditing}
           />
        {(isEditing || channel?.allocation === "Manual") && (
          <EditIcon
            style={!editIconShow || channel?.allocation === 'Equal' ? { display: "none" } : { display: "flex" }}
            onClick={() => setIsEditing(!isEditing)}
          />
        )}
        {isEditing && (
          <>
            <SaveIcon onClick={handleSave}/>
            <CancelIcon
              onClick={() => setIsEditing(false)} />
          </>
        )}
      </TableCellContainer>
    </CellContainer>
  );
}