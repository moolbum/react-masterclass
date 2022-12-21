import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DefaultLayout from "./components/molecules/DefaultLayout";
import Header from "./components/organism/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

function Root() {
  return (
    <Wrapper>
      <Header />

      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </Wrapper>
  );
}

export default Root;
