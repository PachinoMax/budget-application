import { IMonth } from "redux/interfaces";
import Allocation from "./allocation";
import Baseline from "./baseline";
import Frequency from "./frequency";
import { BudgetSettingContainer } from "./style";

type BudgetSettingProps = {
  frequency: string;
  amount: number;
  allocation: string;
  months: IMonth[];
  id: string;
}

export default function BudgetSetting(props: BudgetSettingProps) : React.ReactElement {
  return (
    <BudgetSettingContainer>
      <Frequency {...props}/>
      <Baseline {...props}/>
      <Allocation {...props} />
    </BudgetSettingContainer>
  );
}