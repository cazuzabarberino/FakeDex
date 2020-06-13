import React from "react";
import { Container } from "./styles";

interface Props {
  type: string;
}

export default ({ type }: Props) => {
  return <Container type={type}>{type.toUpperCase()}</Container>;
};
