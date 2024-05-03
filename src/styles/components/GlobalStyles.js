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
    background-image: url('public/background.svg');
    @media only screen and (min-width: 360px) {
      .app {
        width: 375px;
        height: 100vh;
        margin: auto;
        background-size : cover;
        overflow-y: scroll;
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
