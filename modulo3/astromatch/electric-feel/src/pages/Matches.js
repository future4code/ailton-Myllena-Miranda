import React, { useEffect, useState } from "react";
import { ImgLista, MainMatchs, HeaderMatches, ContainerMatches } from "./styled";
import { getMatches } from "../services/requests";

export const Matches = (props)=>{

    const[listaMatches, setListaMatches] = useState([])
    useEffect(()=>{
     getMatches(setListaMatches)
    }, [])
    
  
    return(
        <ContainerMatches>
            <HeaderMatches>
             <p onClick={()=> props.setPage("myllena")}>Vou colocar a minha foto aqui</p>
             <button onClick={()=>props.setPage("home")}>Home</button>
             </HeaderMatches>
            <MainMatchs>
             {listaMatches.map((item)=>{
                return (
                    <div key={item.id}>
                     <ImgLista src={item.photo}/> 
                     <p>{item.name}</p>                       
                    </div>
                )
             })}
            </MainMatchs>
            
        </ContainerMatches>
    )
}