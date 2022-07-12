import React from "react";
import { ContainerHeader,Logo } from "./styled";
import { goToLoginPage, goToHomePage } from "../routes/coordinator";
import {useNavigate} from "react-router-dom" ; 
import logo from "../assets/logo.png"

export const HeaderPublic = ()=>{
    const navigate = useNavigate()
    return(
        <ContainerHeader>
             <Logo src={logo} onClick={()=> goToHomePage(navigate)}/>
                <p onClick={()=> goToLoginPage(navigate)}>tela de login</p>
        </ContainerHeader>
    )
}