import React from "react";
import { DropdownContainer, DropdownIcon, DropdownItem, DropdownMenu } from "./style";

type DropDownProps = {
  handleSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  selectList: Array<String>;
  children: React.ReactNode;
}

export default function Dropdown({ handleSelect, selectList, children }: DropDownProps): React.ReactElement {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <DropdownContainer
      onClick={handleOpen}
      onMouseLeave={() => setIsOpen(false)}>
      <DropdownItem >
        {children}
        <DropdownIcon isOpen={isOpen} />
      </DropdownItem>
      {isOpen && (
        <DropdownMenu>
          {selectList.map((item, index) => (
            <DropdownItem onClick={handleSelect} key={index}>{item}</DropdownItem>
          ))}
        </DropdownMenu>
      )}

    </DropdownContainer>
  );
}
