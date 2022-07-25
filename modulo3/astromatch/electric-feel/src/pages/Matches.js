import React, { useEffect, useState } from "react";
import { ImgLista, MainMatchs, HeaderMatches, ContainerMatches, 
    ItemMatch, Logo, Eu, Chat, MatchPic } from "./styled";
import { getMatches } from "../services/requests";
import logo from "../assets/Electric-Feel.png";
import eu from "../assets/foto-perfil.JPEG";
import posty from "../assets/posty.jpeg";
import ti from "../assets/mozao.jpg"
import chat from "../assets/chat2.png"

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
                <ItemMatch>
                    <MatchPic>
                    <ImgLista src={posty}/>
                    <p><strong>Post Malone</strong></p>    
                    </MatchPic>
                    <Chat src={chat}/>
                </ItemMatch>
                <ItemMatch>
                    <MatchPic>
                    <ImgLista src={ti}/>
                    <p><strong>Timothée Chalamet</strong></p>
                    </MatchPic>   
                    <Chat src={chat}/> 
                </ItemMatch>
             {listaMatches.map((item)=>{
                return (
                    <ItemMatch key={item.id}>
                        <MatchPic>
                     <ImgLista src={item.photo}/> 
                     <p><strong>{item.name}</strong></p> 
                     </MatchPic> 
                     <Chat src={chat}/>                     
                    </ItemMatch>
                )
             })}
            </MainMatchs>
            
        </ContainerMatches>
    )
}