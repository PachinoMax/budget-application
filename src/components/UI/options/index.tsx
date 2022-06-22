import React from "react";
import { Option } from "./style";

type Props = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function Options({ children, onClick }: Props): React.ReactElement {
  return <Option onClick={onClick}> {children} </Option>;
};

