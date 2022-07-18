import React from "react";
import { ContainerHeader,Logo } from "./styled";
import { goToLoginPage, goToHomePage } from "../routes/coordinator";
import {useNavigate} from "react-router-dom" ; 
import login from "../assets/login2.png";
import foi from  "../assets/novaLogo2.png";

export const HeaderPublic = ()=>{
    const navigate = useNavigate()
    return(
        <ContainerHeader>
             <Logo src={foi} onClick={()=> goToHomePage(navigate)}/>
                <Logo src={login} onClick={()=> goToLoginPage(navigate)}/>
        </ContainerHeader>
    )
}