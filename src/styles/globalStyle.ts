import { createGlobalStyle } from 'styled-components';
import './reset.css';


export const GlobalStyle = createGlobalStyle`
  @font-face 
  {
    font-family: 'Avenir Next Cyr';
    src: url('./fonts/AvenirNextCyr-Regular.woff2') format('woff2'),
         url('./fonts/AvenirNextCyr-Regular.woff') format('woff'),
         url('./fonts/AvenirNextCyr-Bold.woff2') format('woff2'),
         url('./fonts/AvenirNextCyr-Bold.woff') format('woff')

  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Avenir Next Cyr', sans-serif;
  }
`;
