import styled from "styled-components";
import { DotsHorizontalRounded } from "@styled-icons/boxicons-regular/DotsHorizontalRounded"

export const StyledTableDots = styled(DotsHorizontalRounded)`
  display: flex;
  position: absolute;
  width: 16px;
  height: 100%;
  align-items: center;
  margin: auto 15px;
  right: 0;
  cursor: pointer;
  z-index: 100;
  &:hover {
    opacity: 0.8;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 156px;
  height: 92px;
  right: 2%;
  top: 5%;
  z-index: 1;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  background: #ffffff;
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-shadow: 0px 4px 16px rgba(24, 32, 51, 0.12);
  border-radius: 4px;
`;
