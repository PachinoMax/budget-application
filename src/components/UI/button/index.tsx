import React from "react";
import { Button } from "./style";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
}

export default function AddButton({ children, onClick }: Props): React.ReactElement {
  return <Button onClick={onClick}>{children}</Button>;
};
