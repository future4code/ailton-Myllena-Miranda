import React, {useState, useEffect} from "react";
import { getProfileToChoose, choosePerson } from "../services/requests";
import { Card } from "../components/Card";
import { ContainerHome, HeaderHome, MainHome,Logo,Eu, Lista, FooterHome } from "./styled";
import logo from "../assets/Electric-Feel.png"
import eu from "../assets/foto-perfil.JPEG"
import lista from "../assets/Matches2.png"
import { Loading } from "../components/styled";


export const Home =(props)=>{
 const [match, setMatch]= useState({})
 const [final, setfinal]= useState(Loading)


 useEffect(()=>{
 getProfileToChoose(setMatch)

 }, []);
    return(
        <ContainerHome>
            <HeaderHome>
            <Logo src={logo}/>
                <Eu src={eu} onClick={()=> props.setPage("myllena")}/>
            </HeaderHome>
            <MainHome>
            <Card match={match} setMatch={setMatch}/>
        
            </MainHome>
            <FooterHome>
            <Lista src={lista} onClick={()=>props.setPage("matches")}/>
              
            </FooterHome>
           
        </ContainerHome>
    )

}