import React from "react";
import { RedButton } from "./style";

export const SecondaryButton = ({ children, type = "button" }) => {
  return <RedButton type={type}>{children}</RedButton>;
};
