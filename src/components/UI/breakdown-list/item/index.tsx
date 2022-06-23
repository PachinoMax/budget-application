import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IMonth } from "redux/interfaces";
import { getCurrentYear } from "utils";
import { Item, ItemContainer, ItemMonth } from "./style";

type BreakdownItemProps = {
  month: string;
  amount: number;
  allocation: string;
  id: string;
  changeChannelMonth: (month: IMonth) => void;
};

export default function BreakdownItem(props: BreakdownItemProps): React.ReactElement {
  const dispatch = useDispatch();
  const { month, amount, allocation } = props;
  const [value, setValue] = useState(amount);

  useEffect(() => {
    setValue(amount);
  }, [amount])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value.replace('$', '').split(",").join(""));
    const newMonthValue = { name: month, value: newValue };
    setValue(newValue);
    dispatch({ type: "SET_MONTH", payload: newMonthValue });
    dispatch({ type: "SET_CHANNEL_MONTH", payload: { id: props.id, newMonthValue } });
    props.changeChannelMonth(newMonthValue);
  }
  return (
    <ItemContainer>
      <ItemMonth>
        {month} {getCurrentYear()}
      </ItemMonth>
      <Item
        value={value === 0 ? '' : value}
        disabled={allocation === "Equal"}
        allowLeadingZeros={false}
        isNumericString={true}
        allowNegative={false}
        thousandSeparator={true}
        prefix="$"
        onChange={handleChange}
        placeholder="$0"
      />
    </ItemContainer>
  );
};
