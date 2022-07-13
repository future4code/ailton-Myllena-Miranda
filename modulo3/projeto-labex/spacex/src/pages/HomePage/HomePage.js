import React from "react";
import {HeaderPublic} from "../../components/HeaderPublic";
import { ContainerHome, MainHome,ContainerCardsHome,
 ContainerImagemPrincipal } from "./styled";
import CardHome from "../../components/CardHome";
import logo from "../../assets/Xmission.png";
import {useNavigate} from "react-router-dom" ; 
import { goToApplicationFormPage, goToListTripPage } from "../../routes/coordinator";
import lua from "../../assets/lua2.png"
import marte from "../../assets/mars2.png"
import ju from "../../assets/jupiter2.png"
import planetas from "../../assets/planets2.png"

export default function HomePage (){
const navigate = useNavigate()
    return(
        <ContainerHome>
            <HeaderPublic/>
            <MainHome>
                <ContainerImagemPrincipal>
                <img src={logo}/>
                </ContainerImagemPrincipal>
                <ContainerCardsHome>
                    <CardHome planeta={"Marte"} img={marte} page={()=> goToApplicationFormPage(navigate)} viagem={"Viagem para:"}/>
                    <CardHome planeta={"Lua"} img={lua}  page={()=> goToApplicationFormPage(navigate)} viagem={"Viagem para:"}/>
                    <CardHome planeta={"Júpiter"} img={ju} page={()=> goToApplicationFormPage(navigate)} viagem={"Viagem para:"}/>
                    <CardHome planeta={"Outros destinos"} img={planetas} page={()=> goToListTripPage(navigate)}/>
                </ContainerCardsHome>
            </MainHome>
        </ContainerHome>
    )

}