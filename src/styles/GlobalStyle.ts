import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor}
  }

  a{
    text-decoration:none;
    /* color:inherit ; */
  }

  * {
    box-sizing: border-box;
    outline: none;
  }
  input, button{
    border: none;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
