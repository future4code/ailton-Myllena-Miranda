import React, {useState, useEffect} from "react";
import { getProfileToChoose, choosePerson } from "../services/requests";
import { Card } from "../components/Card";
import { ContainerHome, HeaderHome, MainHome } from "./styled";


export const Home =(props)=>{
 const [match, setMatch]= useState({})

 useEffect(()=>{
 getProfileToChoose(setMatch)

 }, []);
    return(
        <ContainerHome>
            <HeaderHome>
                <p onClick={()=> props.setPage("myllena")}>Vou colocar a minha foto aqui</p>
            <p>Electric Feel</p>
        
            </HeaderHome>
            <MainHome>
            <Card match={match}/>
            </MainHome>
            <footer>
            <button onClick={()=>props.setPage("matches")}>Matches</button>
              
            </footer>
           
        </ContainerHome>
    )

}