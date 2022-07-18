import React from "react";
import { ContainerHeader,Logo, BotaoVoltar } from "./styled";
import { goToHomePage, goBack } from "../routes/coordinator";
import {useNavigate} from "react-router-dom" ; 
import foi from  "../assets/novaLogo2.png";

export const HeaderPrivate = ()=>{
    const navigate = useNavigate()
    return(
        <ContainerHeader>
             <Logo src={foi} onClick={()=> goToHomePage(navigate)}/>
             <BotaoVoltar onClick={()=>goBack(navigate)}>Voltar</BotaoVoltar>
        </ContainerHeader>
    )
}