import Input from "components/UI/input";
import { quarters } from "helpers/constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IMonth } from "redux/interfaces";
import { BaselineContainer, BaselineIcon, Title } from "./style";
import { InfoTooltip } from '../style';
import { useTypedSelector } from "redux/reducers";
import { getChannel } from '../../../../utils'

type BaselineProps = {
  frequency: string;
  amount: number;
  allocation: string;
  months: IMonth[];
  id: string;
}


export default function Baseline(props: BaselineProps): React.ReactElement {
  const dispatch = useDispatch();
  const channel = useTypedSelector(getChannel(props.id));
  const months = channel?.months
  const [tooltipShow, setTooltipShow] = useState(false);
  const [value, setValue] = useState(props.amount);

  useEffect(() => {
    let sum = props.amount;
    if (props.frequency === "Quarterly") {
      console.log('sdsd', props.months);
      
      quarters.forEach((month, index) => {sum += props.months[index].value;});
    } else {
      props.months.forEach(month => {sum += month.value;});
    }
    setValue(sum);
    dispatch({ type: 'SET_AMOUNT', payload: sum });
    dispatch({ type: 'SET_CHANNEL_AMOUNT', payload: { id: props.id, amount: sum } });
  }, [months]);

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = Number(e.target.value.split(",").join(""));
    setValue(newValue);
    dispatch({ type: "SET_AMOUNT", payload: newValue });
    dispatch({ type: 'SET_CHANNEL_AMOUNT', payload: { id: props.id, amount: newValue } });
  }

  return (
    <BaselineContainer>
      <Title>
        Baseline [{channel?.frequency}] budget
        <BaselineIcon
          onMouseEnter={() => setTooltipShow(true)}
          onMouseLeave={() => setTooltipShow(false)}
        />
        <InfoTooltip show={tooltipShow}>
          {`Chosen budget frequency value`}
        </InfoTooltip>
      </Title>
      
      <Input
        disabled={channel?.allocation === "Manual"}
        handleChange={handleChangeAmount}
        value={channel?.allocation === 'Equal'? props.amount : value}
      />
    </BaselineContainer>
  );
}
