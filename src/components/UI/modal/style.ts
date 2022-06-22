import styled from "styled-components";

export const Overlay = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 50%;
  max-width: calc(100vw - 2rem);
  max-height: calc(100vh - 2rem);
  min-width: 400px;
  padding: calc(2rem * 2) calc(2rem * 2) 2rem;
  position: fixed;
  text-align: center;
  top: 40%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
`

export const Backdrop = styled.div`
  background-color: rgba(178, 187, 213, 0.5);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;