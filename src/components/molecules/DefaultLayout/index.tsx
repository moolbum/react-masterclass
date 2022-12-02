import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export const StyledDefatulLayout = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0px 20px;
`;

function DefaultLayout({ children }: PropsWithChildren) {
  return <StyledDefatulLayout>{children}</StyledDefatulLayout>;
}

export default DefaultLayout;
