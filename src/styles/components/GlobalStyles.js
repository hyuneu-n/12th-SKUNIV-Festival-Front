import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, ol {
    list-style: none;
  }
  a {
    text-decoration: none
  }
  body {
    width: 100%;
    min-height: 100vh;
    @media only screen and (min-width: 360px) {
      .app {
        width: 375px;
        height: 100vh;
        margin: auto;
        background-image: url('../../public/background.svg');
        
        background-size : cover;
      }
    }
  }
  
`;
