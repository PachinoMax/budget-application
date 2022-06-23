import styled from "styled-components";

export const StyledTableDots = styled.div`
  display: flex;
  position: absolute;
  width: 16px;
  height: 100%;
  align-items: center;
  margin: auto 15px;
  right: 0;
  background-image: url(./icons/dots.svg);
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  z-index: 1;
  &:hover {
    opacity: 50%;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 154px;
  height: 89px;
  right: 1%;
  top: 80%;
  z-index: 1;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  background: #ffffff;
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-shadow: 0px 4px 16px rgba(24, 32, 51, 0.12);
  border-radius: 4px;
  letter-spacing: 0.4px;
`;
