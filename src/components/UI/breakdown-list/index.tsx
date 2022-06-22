import { quarters } from "helpers/constants";
import { IMonth } from "redux/interfaces";
import { useTypedSelector } from "redux/reducers";
import BreakdownItem from "./item";
import { BreakdownListContainer } from "./style";
import { getChannel } from '../../../utils'

type BreakdownListProps = {
  amount: number;
  allocation: string;
  months: IMonth[];
  id: string;
}

export default function BreakdownList(props: BreakdownListProps): React.ReactElement {
  const channel = useTypedSelector(getChannel(props.id));
  const monthsList = channel?.frequency === 'Quarterly' ? quarters : props.months;

  return (
    <BreakdownListContainer>
      {monthsList.map((month, index) => {
        return (
          <BreakdownItem key={index} month={month.name} amount={props.amount / monthsList.length} allocation={props.allocation} id={props.id}/>
        );
      })}
    </BreakdownListContainer>
  );
};
