import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

function Root() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

export default Root;
