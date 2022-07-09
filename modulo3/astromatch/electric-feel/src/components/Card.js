import React, {useState, useEffect} from "react";
import { choosePerson } from "../services/requests";
import { ContainerCard, ContainerTexto,Sim, Nao, DivButton,Loading,Procurando } from "./styled";
import sim from "../assets/sim2.png"
import nao from "../assets/nao2.png"
import loading from "../assets/loading.png"

export const Card = (props)=>{
 
    return(
        <>
        {props.match?(
        <ContainerCard photo={props.match.photo} joker={props.match.name} alt={props.match.photo_alt}>
           <div>
            <ContainerTexto> 
            <p><strong>{props.match.name},</strong> {props.match.age}</p>
            <p>{props.match.bio}</p>
            </ContainerTexto>
            <DivButton>
            <Nao src={nao} onClick={()=> choosePerson( props.match.id,false, props.setMatch)}/>
                <Sim src={sim} onClick={()=> choosePerson( props.match.id,true, props.setMatch, props.match)}/>
                </DivButton>
                </div>
        </ContainerCard>) : (
            <div>
            <Loading src={loading}/>
            <Procurando><strong>Procurando novo perfil...</strong></Procurando>
            </div>
        )}
        </>
        );
}