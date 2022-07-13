import React from "react";
import { ContainerHeader,Logo } from "./styled";
import { goToLoginPage, goToHomePage } from "../routes/coordinator";
import {useNavigate} from "react-router-dom" ; 
import logo from "../assets/logo.png"
import login from "../assets/login2.png"

export const HeaderPublic = ()=>{
    const navigate = useNavigate()
    return(
        <ContainerHeader>
             <Logo src={logo} onClick={()=> goToHomePage(navigate)}/>
                <Logo src={login} onClick={()=> goToLoginPage(navigate)}/>
        </ContainerHeader>
    )
}