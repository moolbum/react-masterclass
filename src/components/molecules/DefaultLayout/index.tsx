import React, { PropsWithChildren } from "react";
import styled from "styled-components";

function DefaultLayout({ children }: PropsWithChildren) {
  return <StyledDefatulLayout>{children}</StyledDefatulLayout>;
}

export default DefaultLayout;

export const StyledDefatulLayout = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;
