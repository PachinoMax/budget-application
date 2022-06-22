import React from "react";
import { ButtonContainer } from "./style";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
}

export default function AddButton({ children, onClick }: Props): React.ReactElement {
  return (
    <ButtonContainer onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};
