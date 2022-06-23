import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IChannel, IMonth } from "redux/interfaces";
import { getCurrentYear } from "utils";
import { CellContainer, TableCellTitle, Item, SaveIcon, CancelIcon, EditIcon } from "./style";

type TableCellProps = {
  month: IMonth;
  amount: number;
  allocation: string;
  channel: IChannel;
  quarter?: string;
  frequency: string;
};

export default function TableCell(props: TableCellProps): React.ReactElement {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editIconShow, setEditIconShow] = useState(false);
  const {month, quarter, allocation, amount, frequency} = props;
  const [value, setValue] = useState(amount);
  const [editedValue, setEditedValue] = useState(amount);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value.replace('$', '').split(",").join(""));
    setEditedValue(newValue);
  }

  const handleSave = () => {
    setValue(editedValue);
    setEditedValue(value);
    dispatch({ type: "SET_CHANNEL_MONTH", payload: { id: props.channel.id, months: {name: month.name, value: editedValue} } });
    setIsEditing(false);
  }

  return (
    <CellContainer
      onMouseEnter={() => !isEditing && !editIconShow && setEditIconShow(true)}
      onMouseLeave={() => setEditIconShow(false)}
    >
      <TableCellTitle>
        {quarter || month.name } {` `} {getCurrentYear()}
      </TableCellTitle>
      {allocation === "Equal" && (
        <Item
          value={frequency === 'Quarterly' ? amount / 4 : amount / 12}
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
      {allocation === "Manual" && (
        <Item
        value={isEditing ? editedValue === 0 ? "": editedValue  : value===0 ? "" : value}
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
      {(isEditing || allocation === "Manual") && (
        <EditIcon
          style={!editIconShow || allocation === 'Equal' ? { display: "none" } : { display: "flex" }}
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