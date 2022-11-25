import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import typoTheme, { TypoType } from "../../../styles/typo";

interface TypoProps {
  size?: TypoType;
}

const StyledTypo = styled.span<TypoProps>`
  ${({ size }) => {
    return size && typoTheme[size];
  }}
`;

function Typo({ children, size = "b4" }: PropsWithChildren<TypoProps>) {
  return <StyledTypo size={size}>{children}</StyledTypo>;
}

export default Typo;
