import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./contexts/theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.textColor};
`;

const Button = styled.button``;

function App() {
  const { onChangeTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Title>Hello</Title>
      <Button onClick={onChangeTheme}>Button</Button>
    </Wrapper>
  );
}

export default App;
