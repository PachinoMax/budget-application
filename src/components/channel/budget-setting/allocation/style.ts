import styled from "styled-components";
import { InfoCircle } from "@styled-icons/boxicons-regular/InfoCircle"

export const AllocationContainer = styled.div`
  dispaly: flex;
  width: 184px;
  flex-direction: column;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #2f3b66;
  margin-top: 3px;
  margin-bottom: 8px;
`;

export const AllocationIcon = styled(InfoCircle)`
  position: absolute;
  left: 68%;
  top: calc(50% - 6px);
  width: 12px;
  height: 12px;
  cursor: pointer;
`;
