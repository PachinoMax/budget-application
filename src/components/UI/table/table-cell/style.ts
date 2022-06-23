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
  margin: 20px 0 31px 0px;
  font-weight: 900;
  font-size: 11px;
  line-height: 16px;
  text-transform: uppercase;
  color: #97a4c8;
`;

export const CellContainer = styled.div`
display: flex;
position: relative;
justify-content: space-between;
width: 75px;
height: 128px;
flex-direction: column;
cursor: pointer;
margin: 0 12px 0 25px;
`;

export const Item = styled(NumberFormat)((props: { editing: number }) => ({
  width: '80px',
  height: '20px',
  background: 'none',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  margin: '22px auto',
  color: '#222a41',
  borderRadius: '3px',
  border: props.editing ===1 ? '1px solid rgba(178, 187, 213, 0.5)' : 'none',
  padding: props.editing ===1 ? '15px 15px' : '0',
  transform: props.editing ===1 ? 'translate(-24px, -3px)' : 'translate(0)',
}));

export const SaveIcon = styled(CheckCircleFill)`
  display: flex;
  position: absolute;
  width: 20px;
  height: 100%;
  align-items: center;
  margin: -1px 14px;
  left: 60%;
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
  width: 22px;
  height: 100%;
  align-items: center;
  margin: -1px 14px;
  left: 89%;
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
  left: 65%;
  top: 30%;
  cursor: pointer;
  z-index: 1;
  color: #B2BBD5;
  &:hover {
    opacity: 0.8;
  }
`;