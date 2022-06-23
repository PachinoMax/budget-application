import { useState } from "react";
import { useDispatch } from "react-redux";
import { IChannel } from "redux/interfaces";
import { getCurrentYear, getChannel } from "utils";
import { CellContainer, TableCellTitle, Item, SaveIcon, CancelIcon, EditIcon } from "./style";

type TableCellProps = {
  month: string;
  amount: number;
  allocation: string;
  channel: IChannel;
};

export default function TableCell(props: TableCellProps): React.ReactElement {
  const dispatch = useDispatch();
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
    const newMonthValue = { name: props.month, value: editedValue };
    dispatch({ type: "SET_CHANNEL_MONTH", payload: { id: props.channel.id, newMonthValue } });
    setIsEditing(false);
  }

  return (
    <CellContainer
      onMouseEnter={() => !isEditing && !editIconShow && setEditIconShow(true)}
      onMouseLeave={() => setEditIconShow(false)}
    >
      <TableCellTitle>
        {props.month} {` `} {getCurrentYear()}
      </TableCellTitle>
      {props.allocation === "Equal" && (
        <Item
          value={props.amount / 12}
          disabled={!isEditing}
          allowLeadingZeros={false}
          isNumericString={true}
          allowNegative={false}
          thousandSeparator={true}
          prefix="$"
          onChange={handleChange}
          editing={isEditing ? 1 : 0}
          placeholder="$0"
        />
      )
      }
      {props.allocation === "Manual" && (
        <Item
        value={isEditing ? editedValue : value}
        disabled={!isEditing}
        allowLeadingZeros={false}
        isNumericString={true}
        allowNegative={false}
        thousandSeparator={true}
        prefix="$"
        onChange={handleChange}
        editing={isEditing ? 1 : 0}
        placeholder="$0"
      />
      )}
      {(isEditing || props.allocation === "Manual") && (
        <EditIcon
          style={!editIconShow || props.allocation === 'Equal' ? { display: "none" } : { display: "flex" }}
          onClick={() => setIsEditing(!isEditing)}
        />
      )}
      {isEditing && (
        <>
          <SaveIcon onClick={handleSave} />
          <CancelIcon
            onClick={() => setIsEditing(false)} />
        </>
      )}
    </CellContainer>
  );
}