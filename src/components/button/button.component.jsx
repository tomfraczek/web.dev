import React from "react";
import { ButtonContainer } from "./button.styles";

export const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};
