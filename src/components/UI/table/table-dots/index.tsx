import Options from "components/UI/options";
import React from "react";
import { OptionsContainer, StyledTableDots } from "./style";

type Props = {
  handleEdit: () => void;
  handleDelete: () => void;
}

export default function TableDots(props: Props): React.ReactElement {
  const [isOpen, setIsOpen] = React.useState(false);

  const openOptions = () => setIsOpen(!isOpen);

  const onEdit = () => {
    props.handleEdit();
    setIsOpen(false);
  }

  const onDelete = () => {
    props.handleDelete();
    setIsOpen(false);
  }

  return (
    <>
      <StyledTableDots onClick={openOptions} />
      {isOpen && (
        <OptionsContainer onMouseLeave={() => setIsOpen(false)}>
          <Options onClick={onEdit}> Edit </Options>
          <Options onClick={onDelete}> Delete </Options>
        </OptionsContainer>
      )}
    </>

  );
}