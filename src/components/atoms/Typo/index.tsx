import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { ThemeType } from "../../../styles/theme";
import typoTheme, { TypoType } from "../../../styles/typo";

interface TypoProps {
  size?: TypoType;
  color?: keyof ThemeType;
}

function Typo({
  children,
  size = "b4",
  color = "textColor",
}: PropsWithChildren<TypoProps>) {
  return (
    <StyledTypo size={size} color={color}>
      {children}
    </StyledTypo>
  );
}

export default Typo;

const StyledTypo = styled.span<TypoProps>`
  display: inline-block;

  ${({ size }) => {
    return size && typoTheme[size];
  }}

  color: ${({ theme, color }) => color && theme[color]}
`;
