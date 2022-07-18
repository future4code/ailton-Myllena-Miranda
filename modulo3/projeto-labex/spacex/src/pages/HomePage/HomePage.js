import React from "react";
import {HeaderPublic} from "../../components/HeaderPublic";
import { ContainerHome, MainHome,ContainerCardsHome,
 ContainerImagemPrincipal, Nave } from "./styled";
import CardHome from "../../components/CardHome";
import {useNavigate} from "react-router-dom" ; 
import { goToApplicationFormPage, goToListTripPage } from "../../routes/coordinator";
import planetas from "../../assets/planets2.png";
import corus from "../../assets/corus.png";
import illum from "../../assets/illum2.PNG";
import ald from "../../assets/Alderaan2.PNG";
import nave from "../../assets/foi.png";
import texto from "../../assets/name.png";

export default function HomePage (){
const navigate = useNavigate()
    return(
        <ContainerHome>
            <HeaderPublic/>
            <MainHome>
                <ContainerImagemPrincipal>
                <Nave src={nave}/>
                <img src={texto}/>
                </ContainerImagemPrincipal>
                <ContainerCardsHome>
                    <CardHome planeta={"Coruscant"} img={corus} page={()=> goToApplicationFormPage(navigate)} viagem={"Viagem para:"}/>
                    <CardHome planeta={"Alderaan"} img={ald}  page={()=> goToApplicationFormPage(navigate)} viagem={"Viagem para:"}/>
                    <CardHome planeta={"Illum"} img={illum} page={()=> goToApplicationFormPage(navigate)} viagem={"Viagem para:"}/>
                    <CardHome planeta={"Viagens disponíveis"} img={planetas} page={()=> goToListTripPage(navigate)}/>
                </ContainerCardsHome>
            </MainHome>
        </ContainerHome>
    )

}