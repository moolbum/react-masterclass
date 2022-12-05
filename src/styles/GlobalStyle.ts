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
    color:inherit ;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }
  
  input, button{
    border: none;
    box-shadow: 0px 2px 6px rgba(94, 101, 110, 0.2);
  }

  button{
    cursor: pointer;
    transition:0.2s all;

    &:active{
      scale:0.98;
      transform:translateY(2px) ;
    }
  }

  select {
    border: none;
  }
`;

export default GlobalStyle;
