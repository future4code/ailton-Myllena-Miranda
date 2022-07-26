import React from "react";
import { ContainerButton, ButtonName } from "./styled";

export const RoundButton = (props) => {
  return (
    <ContainerButton color={props.color}  border={props.border} radius={props.radius} onClick={props.onClick}>
      <ButtonName text={props.text}>{props.title}</ButtonName>
    </ContainerButton>
  );
};
