import NumberFormat from "react-number-format";
import styled from "styled-components";
import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill';
import { Cancel } from '@styled-icons/material-rounded/Cancel';
import { Edit } from '@styled-icons/fluentui-system-regular/Edit';

export const TableCellContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 75px;
  height: 128px;
  flex-direction: column;
  cursor: pointer;
  margin: 0 11px 0 25px;
`;

export const TableCellTitle = styled.div`
  width: 70px;
  height: 16px;
  margin: 20px 0 33px 0;
  font-weight: 900;
  font-size: 11px;
  line-height: 16px;
  text-transform: uppercase;
  color: #97a4c8;
`;

export const CellContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 1000px;
  height: 100%;
`;

export const Item = styled(NumberFormat)`
	background: none;
	width: 80px;
	height: 20px;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	margin: 23px auto;
	color: #222a41;
	box-sizing: border-box;
	border-radius: 4px;
	border: none;
`;

export const SaveIcon = styled(CheckCircleFill)`
  display: flex;
  position: absolute;
  width: 15px;
  height: 100%;
  align-items: center;
  margin: auto 15px;
  left: 15%;
  top: 30%;
  cursor: pointer;
  z-index: 1;
  color: #2FCF5F;
  &:hover {
    opacity: 0.8;
  }
`;

export const CancelIcon = styled(Cancel)`
  display: flex;
  position: absolute;
  width: 18px;
  height: 100%;
  align-items: center;
  margin: auto 15px;
  left: 40%;
  top: 30%;
  cursor: pointer;
  z-index: 1;
  color: #EE2032;
  &:hover {
    opacity: 0.8;
  }
`;

export const EditIcon = styled(Edit)`
  display: flex;
  position: absolute;
  width: 18px;
  height: 100%;
  align-items: center;
  margin: auto 15px;
  left: 40%;
  top: 30%;
  cursor: pointer;
  z-index: 1;
  color: #B2BBD5;
  &:hover {
    opacity: 0.8;
  }
`;