import BreakdownList from "components/UI/breakdown-list";
import { IMonth } from "redux/interfaces";
import { BreakdownContainer, Subtitle, Title } from "./style";

type BreakdownProps = {
  amount: number;
  allocation: string;
  months: IMonth[];
  id: string;
}

export default function Breakdown(props: BreakdownProps): React.ReactElement {

  return (
    <BreakdownContainer>
      <Title>Budget Breakdown</Title>
      <Subtitle>
        By default, your budget will be equally divided throughout the year. You
        can manually change the budget allocation, either now or later.
      </Subtitle>
      <BreakdownList {...props} />
    </BreakdownContainer>
  );
}