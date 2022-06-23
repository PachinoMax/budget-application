import React, { useEffect } from "react";
import { quarters } from "helpers/constants";
import { IMonth } from "redux/interfaces";
import { useTypedSelector } from "redux/reducers";
import BreakdownItem from "./item";
import { BreakdownListContainer } from "./style";
import { getChannel } from '../../../utils'
import { useDispatch } from "react-redux";

type BreakdownListProps = {
  amount: number;
  allocation: string;
  months: IMonth[];
  id: string;
  frequency: string;
}

export default function BreakdownList(props: BreakdownListProps): React.ReactElement {
  const dispatch = useDispatch();
  const { id, allocation, months, amount } = props;
  const channel = useTypedSelector(getChannel(id));
  const amountValue = channel?.amount;
  const frequencyValue = channel?.frequency;
  const allocationValue = channel?.allocation;

  const monthsList = frequencyValue === 'Quarterly' ? quarters : months;

  useEffect(() => {
    dispatch({ type: 'SET_CHANNEL_AMOUNT', payload: { id: id, amount: amount } });
  }, [amountValue, frequencyValue, allocationValue, id, dispatch, amount]);

  const changeChannelMonth = (month: IMonth): void => {
    dispatch({ type: 'SET_MONTH', payload: { id: id, months: month } });
    dispatch({ type: 'SET_CHANNEL_MONTH', payload: { id: id, months: month } });
  }


  return (
    <BreakdownListContainer>
      {frequencyValue === "Quarterly" &&
        allocationValue === "Manual" &&
        quarters.map((quarter, index) => {
          return <BreakdownItem
            key={index}
            month={months[index].name}
            amount={quarter.value}
            allocation={allocation}
            id={props.id}
            changeChannelMonth={changeChannelMonth}
          />
        }
        )}
      {frequencyValue === "Quarterly" &&
        allocationValue === "Equal" &&
        quarters.map((quarter, index) => {
          return <BreakdownItem
            key={index}
            month={quarter.name}
            amount={amount / quarters.length}
            allocation={allocation}
            id={id}
            changeChannelMonth={changeChannelMonth}
          />
        }
        )}
      {frequencyValue !== "Quarterly" &&
        allocationValue === "Equal" &&
        monthsList.map((month, index) => {
          return <BreakdownItem
            key={index}
            month={month.name}
            amount={amount / monthsList.length}
            allocation={allocation}
            id={id}
            changeChannelMonth={changeChannelMonth}
          />
        }
        )}
      {frequencyValue !== "Quarterly" &&
        allocationValue === "Manual" &&
        months.map((month, index) => {
          return <BreakdownItem
            key={index}
            month={month.name}
            amount={month.value}
            allocation={allocation}
            id={id}
            changeChannelMonth={changeChannelMonth}
          />
        }
        )}

    </BreakdownListContainer>
  );
};
