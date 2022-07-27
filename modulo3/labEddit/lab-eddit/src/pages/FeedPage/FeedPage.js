import React from "react";
import { Header } from "../../components/Header/Header";
import {
  ContainerFeed,
  ContainerForm,
  InputDescription,
  InputTitle,
  FineLineModificada,
} from "./styled";
import { Separator } from "../../styled";
import { RoundButton } from "../../components/RoundButton/RoundButton";
import { CardPost } from "../../components/CardPost/CardPost";


export default function FeedPage() {
  return (
    <ContainerFeed>
      <Header title={"Logout"} />
      <Separator valor={"30px"} />
      <ContainerForm>
        <InputTitle placeholder="Título" />
        <InputDescription placeholder="Escreva seu post..." />
        <RoundButton
          color={"#FF6489, #F9B24E"}
          title={"Postar"}
          text={"#FFFFFF"}
          border={"none"}
          radius={"12px"}
        />
      </ContainerForm>
      <FineLineModificada/>
      <Separator valor={"36px"}/>
      <CardPost/>
    </ContainerFeed>
  );
}
