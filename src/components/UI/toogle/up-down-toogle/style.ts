import styled from "styled-components";
import { TriangleDown } from '@styled-icons/entypo/TriangleDown';

export const UpOrDownIcon = styled(TriangleDown)((props: { isOpen: boolean }) => ({
  transform: props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 0.5s ease-in-out',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20px',
  height: '20px',
  color: '#B2BBD5',
  margin: 'auto 10px',
  cursor: 'pointer',
}));
