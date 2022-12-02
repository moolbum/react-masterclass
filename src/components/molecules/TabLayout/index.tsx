import React, { PropsWithChildren } from "react";
import styled from "styled-components";

function TabLayout({ children }: PropsWithChildren) {
  return <TabLayoutContainer>{children}</TabLayoutContainer>;
}

export default TabLayout;

const TabLayoutContainer = styled.section`
  margin-top: 30px;
`;
