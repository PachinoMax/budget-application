import Switch from "components/UI/switch";
import { months, quarters } from "helpers/constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IMonth } from "redux/interfaces";
import { AllocationContainer, AllocationIcon, Title } from "./style";
import { InfoTooltip } from '../style';
import { useTypedSelector } from "redux/reducers";
import { getChannel } from '../../../../utils'

type AllocationProps = {
  allocation: string;
  id: string;
};

export default function Allocation(props: AllocationProps): React.ReactElement {
  const channel = useTypedSelector(getChannel(props.id));
  const frequency = channel?.frequency
  const allocation = channel?.allocation
  const dispatch = useDispatch();
  const [tooltipShow, setTooltipShow] = useState(false);
  const [selected, setSelected] = useState(props.allocation);

  const changeSwitch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let monthsList: IMonth[] = [];
    frequency === 'Quarterly' ? monthsList = quarters : monthsList = months;
    setSelected(e.currentTarget.innerText);
    dispatch({ type: 'SET_MONTH_LIST', payload: monthsList });
    dispatch({ type: "SET_ALLOCATION", payload: e.currentTarget.innerText });
    dispatch({ type: 'SET_CHANNEL_ALLOCATION', payload: { id: props.id, allocation: e.currentTarget.innerText } });
  }

  useEffect(() => {
    setSelected(props.allocation);
  }, [allocation, props.allocation]);

  return (
    <AllocationContainer>
      <Title>
        Budget Allocation
        <AllocationIcon
          onMouseOver={() => setTooltipShow(true)}
          onMouseLeave={() => setTooltipShow(false)}
        />
        <InfoTooltip show={tooltipShow}>
          {`
            "Equal" - Adding an amount to “Baseline budget”, should fill the “Budget Breakdown” fields and be divided equally.
            "Manual" - The “Baseline budget” should become the sum of all the “Budget Breakdown” fields.
          `}
        </InfoTooltip>
      </Title>
      <Switch
        handleChange={changeSwitch}
        selected={selected}
      />
    </AllocationContainer>
  );
}