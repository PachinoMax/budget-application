import React, { useState } from "react";
import Switch from "components/UI/switch";
import { useDispatch } from "react-redux";
import { AllocationContainer, AllocationIcon, Title } from "./style";
import { InfoTooltip } from '../style';

type AllocationProps = {
  allocation: string;
  id: string;
};

export default function Allocation(props: AllocationProps): React.ReactElement {
  const dispatch = useDispatch();
  const [tooltipShow, setTooltipShow] = useState(false);
  const [selected, setSelected] = useState(props.allocation);

  const changeSwitch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(e.currentTarget.innerText === "Manual") {
      dispatch({type: 'SET_AMOUNT', payload: 0});
      dispatch({type: 'SET_CHANNEL_AMOUNT', payload: {id: props.id, amount: 0}});
    }
    setSelected(e.currentTarget.innerText);
    dispatch({ type: "SET_ALLOCATION", payload: e.currentTarget.innerText });
    dispatch({ type: 'SET_CHANNEL_ALLOCATION', payload: { id: props.id, allocation: e.currentTarget.innerText } });
  }

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