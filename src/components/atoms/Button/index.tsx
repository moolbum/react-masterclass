import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  className?: string;
}

function Button({
  children,
  onClick,
  className,
}: PropsWithChildren<ButtonProps>) {
  return (
    <StyledButton className={className} type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
