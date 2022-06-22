import React from "react";
import { InputElement } from "./style";

type InputProps = {
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled: boolean;
}

export default function Input({
  value,
  handleChange,
  disabled,
}: InputProps): React.ReactElement {
  return (
    <>
      <InputElement
        value={value}
        onChange={handleChange}
        disabled={disabled}
        allowLeadingZeros={false}
        isNumericString={true}
        allowNegative={disabled ? false : true}
        thousandSeparator={true}
      />
    </>
  );
}
