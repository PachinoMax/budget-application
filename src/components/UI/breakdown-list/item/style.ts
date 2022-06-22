import NumberFormat from "react-number-format";
import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  margin: 12px 12px 10px 12px;
  position: relative;
`;

export const ItemMonth = styled.div`
  width: 160px;
  height: 21px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 10px;
  color: #2f3b66;
`;

export const Item = styled(NumberFormat)((props: {disabled : boolean}) => ({
  cursor: props.disabled ? "not-allowed" : "pointer",
  border: "1px solid rgba(178, 187, 213, 0.5)",
  boxShadow: "0px 1px 2px #e6e8f0",
  borderRadius: "3px",
  height: "40px",
  width: "150px",
  color: props.disabled ? "#99A4C2" : "#2A3558",
}));
