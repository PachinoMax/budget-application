import { quarters } from "helpers/constants";
import { IMonth } from "redux/interfaces";
import { useTypedSelector } from "redux/reducers";
import BreakdownItem from "./item";
import { BreakdownListContainer, BreakdownListWrapper } from "./style";
import { getChannel } from '../../../utils'
import { useEffect } from "react";
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
  const channel = useTypedSelector(getChannel(props.id));
  
  const monthsList = props.frequency === 'Quarterly' ? quarters : props.months;

  useEffect(() => {
    dispatch({ type: 'SET_CHANNEL_AMOUNT', payload: { id: props.id, amount: props.amount } });
  }, [props.amount]);

  const changeChannelMonth = (month: IMonth): void => {
    dispatch({ type: 'SET_MONTH', payload: { id: props.id, newMonthValue: month } });
    dispatch({ type: 'SET_CHANNEL_MONTH', payload: { id: props.id, newMonthValue: month } });
  }


  return (
    <BreakdownListContainer>
        {props.frequency !== "Quarterly" &&
          props.allocation === "Equal" &&
          monthsList.map((month, index) => {
            return <BreakdownItem
              key={index}
              month={month.name}
              amount={props.amount / monthsList.length}
              allocation={props.allocation}
              id={props.id}
              changeChannelMonth={changeChannelMonth}
            />
          }
          )}
        {props.frequency === "Quarterly" &&
          props.allocation === "Equal" &&
          quarters.map((quarter, index) => {
            return <BreakdownItem
              key={index}
              month={quarter.name}
              amount={props.amount / quarters.length}
              allocation={props.allocation}
              id={props.id}
              changeChannelMonth={changeChannelMonth}
            />
          }
          )}
        {props.frequency !== "Quarterly" &&
          props.allocation === "Manual" &&
          props.months.map((month, index) => {
            return <BreakdownItem
              key={index}
              month={month.name}
              amount={month.value}
              allocation={props.allocation}
              id={props.id}
              changeChannelMonth={changeChannelMonth}
            />
          }
          )}
          {props.frequency === "Quarterly" &&
          props.allocation === "Manual" &&
          quarters.map((quarter, index) => {
            return <BreakdownItem
              key={index}
              month={quarter.name}
              amount={quarter.value}
              allocation={props.allocation}
              id={props.id}
              changeChannelMonth={changeChannelMonth}
            />
          }
          )}
    </BreakdownListContainer>
  );
};
