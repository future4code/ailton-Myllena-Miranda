import React from "react";
import {
  ContainerCard,
  ContainerVotes,
  ContainerVotesIcon,
  SetaImg,
  ContainerChatMessage,
  ChatImg,
  VoteP,
  MessageP,
  ContainerTexto,
  TextoP,
  ContainerUser,
  UserP
} from "./styled";
import chat from "../../assets/chat.png";
import down from "../../assets/down.png";
import up from "../../assets/up.png";
import { Separator } from "../../styled";

export const CardPost = () => {
  return (
    <ContainerCard>
      <Separator valor={"9px"}/>
      <ContainerUser>
        <UserP>Enviado por: labaluno83 </UserP>
      </ContainerUser>
      <Separator valor={"18px"}/>
      <ContainerTexto>
        <TextoP>
          Porque a maioria dos desenvolvedores usam Linux? ou as empresas de
          tecnologia usam Linux ?
        </TextoP>
      </ContainerTexto>
      <Separator valor={"18px"}/>
      <ContainerVotes>
        <ContainerVotesIcon>
          <SetaImg src={up} />
          <VoteP>1.2K</VoteP>
          <SetaImg src={down} />
        </ContainerVotesIcon>
        <Separator width={"10px"}/>
        <ContainerChatMessage>
          <ChatImg src={chat} />
          <MessageP>132</MessageP>
        </ContainerChatMessage>
      </ContainerVotes>
      <Separator valor={"9px"}/>
    </ContainerCard>
  );
};
