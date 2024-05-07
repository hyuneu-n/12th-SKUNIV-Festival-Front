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
    @media only screen and (min-width: 330px) {
      .app {
        background-image: url('background.svg');
        width: 100vw;
        height: 100vh;
        margin: auto;
        background-size : cover;
        overflow-x: hidden;
        overflow-y: auto;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        }
      .app::-webkit-scrollbar {
        display: none;
      }
      }
    }
  }
  
`;
