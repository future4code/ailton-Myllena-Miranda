import React from 'react'
import { ContainerHeader, LogoDiv, ContainerLogo, Title, XImg } from './styled';
import { Separator } from '../../styled';


export const Header = (props) => {
  return (
    <ContainerHeader>
        <XImg src={props.src} onClick={props.voltar}/>
      <ContainerLogo>
        <div>
      <LogoDiv color={"#FE7E02"} border={"100% 0 0 0"}/>
      <LogoDiv color={"#F9B24E"} border={"0 0 100% 0"}/>
      </div>
      <div>
      <LogoDiv color={"#45525B"} border={"100% 0 0 0"}/>
      <LogoDiv color={"#A8BBC6"} border={"0 0 100% 0"}/>
      </div>
      </ContainerLogo>
      <Title onClick={props.onClick}>{props.title}</Title>
    </ContainerHeader>
  )
}
