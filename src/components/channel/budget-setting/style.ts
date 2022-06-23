import styled from "styled-components";

export const BudgetSettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 1120px;
  margin: 29px 0 0 31px;
`;

export const InfoTooltip = styled.div<{ show: boolean }>((props: { show: boolean }) => ({
  position: "absolute",
  display: `${props.show ? "flex" : "none"}`,
  width: "350px",
  background: "linear-gradient(360deg, #fafafc 0%, #ffffff 100%)",
  border: "1px solid rgba(178, 187, 213, 0.5)",
  cursor: "pointer",
  margin: "20px",
  zIndex: 1,
})
);