import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled.div`
  background: #fff;
  box-shadow: 12px 8px 32px rgba(46,71,97, 0.3);
  border-radius: 8px;
  padding: 40px;
  position: relative;
`;

export const Overlay = styled.div`
  background-color: #f6f7fb;
  position: absolute;
  left: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
`