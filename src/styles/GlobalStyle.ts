import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    margin: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${({ theme }) => theme.textColor}
  }

  a{
    text-decoration:none;
    color:inherit ;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
