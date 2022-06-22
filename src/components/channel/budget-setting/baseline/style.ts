import styled from "styled-components";
import { InfoCircle } from "@styled-icons/boxicons-regular/InfoCircle"


export const BaselineContainer = styled.div`
  display: flex;
  width: 237px;
  margin: 0 55px 0 0;
  flex-direction: column;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #2a3558;
  margin-top: 2px;
  margin-bottom: 8px;
`;

export const BaselineIcon = styled(InfoCircle)`
  position: absolute;
  left: 78%;
  top: calc(50% - 6px);
  width: 12px;
  height: 12px;
  cursor: pointer;
`;
