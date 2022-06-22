import styled from "styled-components";
import NumberFormat from "react-number-format";

export const InputElement = styled(NumberFormat)((props: {disabled : boolean}) => ({
  display: "flex",
  alignItems: "left",
  cursor: props.disabled ? "not-allowed" : "pointer",
  border: "1px solid rgba(178, 187, 213, 0.5)",
  boxShadow: "0px 1px 2px #e6e8f0",
  borderRadius: "3px",
  height: "40px",
  width: "237px",
  padding: "0 18px",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "21px",
  color: props.disabled ? "#99A4C2" : "#2A3558",
}));
