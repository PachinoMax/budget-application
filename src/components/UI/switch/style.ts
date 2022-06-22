import styled from "styled-components";

export const SwitchContainer = styled.div`
  display: flex;
  width: 184px;
`;

export const SwitchOption = styled.div<{active: boolean}>((props: {active : boolean}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "89px",
  height: "40px",
  background: props.active ? "white" : "#F5F6FA",
  border: "1px solid rgba(178, 187, 213, 0.5)",
  boxShadow: "0px 1px 2px #e6e8f0",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "18px",
  textAlign: "center",
  color: props.active ? "#2a3558" : "#707EA7",
}));
