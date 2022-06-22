import { useDispatch } from "react-redux";
import { getCurrentYear } from "utils";
import { Item, ItemContainer, ItemMonth } from "./style";

type BreakdownItemProps = {
  month: string;
  amount: number;
  allocation: string;
  id: string;
};

export default function BreakdownItem(props: BreakdownItemProps): React.ReactElement {
  const dispatch = useDispatch();
  const { month, amount, allocation } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value.replace('$', '').split(",").join(""));
    const newMonth = { name: month, value: newValue };
    dispatch({ type: "SET_MONTH", payload: newMonth });
    dispatch({ type: "SET_CHANNEL_MONTH", payload: { id: props.id, newMonth } });
  }
  return (
    <ItemContainer>
      <ItemMonth>
        {month} {getCurrentYear()}
      </ItemMonth>
      <Item
        value={amount}
        disabled={allocation === "Equal"}
        allowLeadingZeros={false}
        isNumericString={true}
        allowNegative={false}
        thousandSeparator={true}
        prefix="$"
        onChange={handleChange}
      />
    </ItemContainer>
  );
};
