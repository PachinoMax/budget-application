import Options from "components/UI/options";
import React, { useEffect, useState } from "react";
import { OptionsContainer, StyledTableDots } from "./style";

type Props = {
  handleEdit: () => void;
  handleDelete: () => void;
}

export default function TableDots(props: Props): React.ReactElement {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => {
      setIsOpenPopup(false);
    });

    return () => {
      document.removeEventListener("click", () => {
        setIsOpenPopup(false);
      });
    };
  }, []);

  const openOptions = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (isOpenPopup) {
      setIsOpenPopup(false);
    } else {
      setIsOpenPopup(true);
    }
  };

  const onEdit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    props.handleEdit();
    setIsOpenPopup(false);
  }

  const onDelete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    props.handleDelete();
    setIsOpenPopup(false);
  }

  return (
    <>
      <StyledTableDots onClick={openOptions} />
      {isOpenPopup && (
        <OptionsContainer onMouseLeave={() => setIsOpenPopup(false)}>
          <Options onClick={onEdit}> Edit </Options>
          <Options onClick={onDelete}> Delete </Options>
        </OptionsContainer>
      )}
    </>

  );
}