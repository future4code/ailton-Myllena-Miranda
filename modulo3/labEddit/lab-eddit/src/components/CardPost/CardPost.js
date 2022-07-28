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

export const CardPost = (props) => {
  console.log(props.Po)
  return (
    <ContainerCard>
      <Separator valor={"9px"}/>
      <ContainerUser>
        <UserP>{`Enviado por: ${props.Post.username}`} </UserP>
      </ContainerUser>
      <Separator valor={"18px"}/>
      <ContainerTexto>
        <TextoP>
         {props.Post.body}
        </TextoP>
      </ContainerTexto>
      <Separator valor={"18px"}/>
      <ContainerVotes>
        <ContainerVotesIcon>
          <SetaImg src={up} />
          <VoteP>{props.Post.voteSum}</VoteP>
          <SetaImg src={down} />
        </ContainerVotesIcon>
        <Separator width={"10px"}/>
        <ContainerChatMessage>
          <ChatImg src={chat} />
          <MessageP>{props.Post.commentCount}</MessageP>
        </ContainerChatMessage>
      </ContainerVotes>
      <Separator valor={"9px"}/>
    </ContainerCard>
  );
};
