import React from "react";
import { SwitchContainer, SwitchOption } from "./style";
import {switchOptions} from '../../../helpers/constants';

type SwitchProps = {
  handleChange: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  selected: string;
}

export default function Switch({handleChange, selected}: SwitchProps): React.ReactElement {

  return (
    <SwitchContainer>
      {switchOptions.map((item, index) => (
        <SwitchOption
          active={item.option.includes(selected)}
          onClick={handleChange}
          key={index}>
          {item.option}
          </SwitchOption>
      ))}
    </SwitchContainer>
  );
}