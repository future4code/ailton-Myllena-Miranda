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
  UserP,
} from "./styled";
import chat from "../../assets/chat.png";
import down from "../../assets/down.png";
import up from "../../assets/up.png";
import { Separator } from "../../styled";
import upGreen from "../../assets/up-green.png";
import downRed from "../../assets/down-red.png";

export const CardPost = (props) => {
  return (
    <ContainerCard>
      <Separator valor={"9px"} />
      <ContainerUser onClick={props.onClick}>
        <UserP>{`Enviado por: ${props.Post.username}`} </UserP>
      </ContainerUser >
      <Separator valor={"18px"} />
      <ContainerTexto  onClick={props.onClick}>
        <TextoP>{props.Post.body}</TextoP>
      </ContainerTexto>
      <Separator valor={"18px"} />
      <ContainerVotes>
        <ContainerVotesIcon>
          {props.Post.userVote !== 1 && (
            <SetaImg src={up} onClick={props.upVote} />
          )}
          {props.Post.userVote === 1 && (
            <SetaImg src={upGreen} onClick={props.delete} />
          )}
          <VoteP>{props.Post.voteSum}</VoteP>
          {props.Post.userVote !== -1 && (
            <SetaImg src={down} onClick={props.downVote} />
          )}
          {props.Post.userVote === -1 && (
            <SetaImg src={downRed} onClick={props.delete} />
          )}
        </ContainerVotesIcon>
        <Separator width={"10px"} />
        {props.typeCard === "post" && (
          <ContainerChatMessage onClick={props.onClick}>
            <ChatImg src={chat} />
            <MessageP>{props.Post.commentCount}</MessageP>
          </ContainerChatMessage>
        )}
      </ContainerVotes>
      <Separator valor={"9px"} />
    </ContainerCard>
  );
};
