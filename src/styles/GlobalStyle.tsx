import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --grenn--color: #2BB6BC;
    --gren--weak--color: #D2F0F1;
    --gray--color: #5E6278;
    --light--gray: #CFCFCF;
    --light--gray--600: #A7A2A2;
    --white--color: #FFFFFF;

    font-size: 60%;   
  }

  /* font-size: 16px;
  1rem = 10px
  */

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;