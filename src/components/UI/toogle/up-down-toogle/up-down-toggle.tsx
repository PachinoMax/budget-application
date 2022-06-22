import React from "react";
import { UpOrDownIcon } from "./style";

type Props = {
  isUp: boolean;
  onClick?: () => void;
}

function UpDownToggle({ isUp, onClick }: Props): React.ReactElement {
  return (
    <UpOrDownIcon isOpen={isUp} onClick={onClick} />
  );
}

export default UpDownToggle;