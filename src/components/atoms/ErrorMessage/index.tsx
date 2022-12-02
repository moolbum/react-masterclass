import React, { PropsWithChildren } from "react";
import Typo from "../Typo";

function ErrorMessage({ children }: PropsWithChildren) {
  return <Typo color="error">{children}</Typo>;
}

export default ErrorMessage;
