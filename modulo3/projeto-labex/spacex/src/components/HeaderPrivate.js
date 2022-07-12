import React from "react";
import { ContainerHeader,Logo, BotaoVoltar } from "./styled";
import { goToHomePage, goBack } from "../routes/coordinator";
import {useNavigate} from "react-router-dom" ; 
import logo from "../assets/logo.png"

export const HeaderPrivate = ()=>{
    const navigate = useNavigate()
    return(
        <ContainerHeader>
             <Logo src={logo} onClick={()=> goToHomePage(navigate)}/>
             <BotaoVoltar onClick={()=>goBack(navigate)}>Voltar</BotaoVoltar>
        </ContainerHeader>
    )
}