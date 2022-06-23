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
        value={value === 0 ? "" : value}
        onChange={handleChange}
        disabled={disabled}
        allowLeadingZeros={false}
        isNumericString={false}
        allowNegative={disabled ? false : true}
        thousandSeparator={true}
        placeholder="0"
      />
    </>
  );
}
