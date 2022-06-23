import styled from "styled-components";
import { TriangleDown } from '@styled-icons/entypo/TriangleDown';

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: left;
  height: 40px;
  cursor: pointer;
  background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
  margin-top: 8px;
  letter-spacing: 0.2px;
`;

export const DropdownItem = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  height: 40px;
  position: relative;
  text-align: center;
  background: white;
  color: #2a3558;
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
  justify-content: space-between;
  padding: 9px 14px;
  align-items: center;
  &:hover {
    background: #f6f7fb;
  }
`;


export const DropdownIcon = styled(TriangleDown)((props: { isOpen: boolean }) => ({
  transform: props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 0.5s ease-in-out',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '16px',
  height: '16px',
  color: '#B2BBD5',
  margin: '0 -5px 0 0',
}));

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
`;