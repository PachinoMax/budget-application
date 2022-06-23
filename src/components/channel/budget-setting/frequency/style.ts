import styled from "styled-components";
import { InfoCircle } from "@styled-icons/boxicons-regular/InfoCircle"

export const FrequencyContainer = styled.div`
  dispaly: flex;
  width: 226px;
  margin-right: 55px;
  margin-bottom:10px
  flex-direction: column;
`;

export const FrequencyTitle = styled.div`
  position: relative;
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #2f3b66;
  margin-top: 2px;
`;

export const FrequencyIcon = styled(InfoCircle)`
  position: absolute;
  left: 55%;
  top: calc(50% - 6px);
  width: 12px;
  height: 12px;
  cursor: pointer;
`;
