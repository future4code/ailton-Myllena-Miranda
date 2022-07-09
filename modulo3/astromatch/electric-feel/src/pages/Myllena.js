import React from "react";
import { ContainerMyllena,HeaderMyllena, MainMyllena,
    FooterMyllena,Lista, Logo, ContainerCardMyllena } from "./styled";
import { ContainerTexto } from "../components/styled";    
import logo from "../assets/Electric-Feel.png"
import lista from "../assets/Matches2.png"
import euFoto from "../assets/foto-tinder.JPEG"

export const Myllena = (props)=>{
    return(
        <ContainerMyllena>
            <HeaderMyllena>
            <Logo src={logo} onClick={()=>props.setPage("home")}/>
           
            </HeaderMyllena>
            <MainMyllena>
            <ContainerCardMyllena photo={euFoto}>
                <ContainerTexto>
            <p><strong>Myllena,</strong> 24</p>
            <p>Pros: parceira, tagarela, amo dates em bar de esquina
            </p>
            <p>Cons: extremamente barbeira, endividada, cozinho mal</p>
            </ContainerTexto>
            </ContainerCardMyllena>
            </MainMyllena>
            <FooterMyllena>
            <Lista src={lista} onClick={()=>props.setPage("matches")}/>
            </FooterMyllena>
        </ContainerMyllena>
    )
}