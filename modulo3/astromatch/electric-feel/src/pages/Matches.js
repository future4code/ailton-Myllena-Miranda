import React, { useEffect, useState } from "react";
import { ImgLista, MainMatchs, HeaderMatches, ContainerMatches, ItemMatch, Logo, Eu } from "./styled";
import { getMatches } from "../services/requests";
import logo from "../assets/Electric-Feel.png"
import eu from "../assets/foto-perfil.JPEG"

export const Matches = (props)=>{

    const[listaMatches, setListaMatches] = useState([])
    useEffect(()=>{
     getMatches(setListaMatches)
    }, [])
    
  
    return(
        <ContainerMatches>
            <HeaderMatches>
    
             <Logo onClick={()=>props.setPage("home")} src={logo}/>
                <Eu src={eu} onClick={()=> props.setPage("myllena")}/>
             </HeaderMatches>
            <MainMatchs>
             {listaMatches.map((item)=>{
                return (
                    <ItemMatch key={item.id}>
                     <ImgLista src={item.photo}/> 
                     <p><strong>{item.name}</strong></p>                       
                    </ItemMatch>
                )
             })}
            </MainMatchs>
            
        </ContainerMatches>
    )
}