import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Dropdown from "components/UI/dropdown";
import { FrequencyContainer, FrequencyIcon, FrequencyTitle } from "./style";
import { InfoTooltip } from '../style';
import { useTypedSelector } from "redux/reducers";
import { getChannel } from '../../../../utils'

type FrequencyProps = {
  frequency: string;
  id: string;
};

export default function Frequency(props: FrequencyProps): React.ReactElement {
  const [tooltipShow, setTooltipShow] = useState(false);
  const channel = useTypedSelector(getChannel(props.id));
  const frequency = channel?.frequency
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(frequency);


  const onFrequencySelect = (e: React.MouseEvent<HTMLDivElement>): void => {
    const selectedFrequency = e.target as HTMLElement;
    setSelected(selectedFrequency.innerText);
    dispatch({ type: "SET_FREQUENCY", payload: selectedFrequency.innerText });
    dispatch({ type: 'SET_CHANNEL_FREQUENCY', payload: { id: props.id, frequency: selectedFrequency.innerText } });
  }

  return (
    <FrequencyContainer>
      <FrequencyTitle>
        Budget Frequency
        <FrequencyIcon
          onMouseEnter={() => setTooltipShow(true)}
          onMouseLeave={() => setTooltipShow(false)}
        />
        <InfoTooltip show={tooltipShow}>
          {`
            Annually - will divide the budget into 12.
            Monthly - will assign the budget to each month.
            Quarterly - will assign the budget to each quarter.      
          `}
        </InfoTooltip>
      </FrequencyTitle>
      <Dropdown
        handleSelect={onFrequencySelect}
        selectList={["Annually", "Monthly", "Quarterly"]}
      >
        {selected}
      </Dropdown>
    </FrequencyContainer>
  );
}