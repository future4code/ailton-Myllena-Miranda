import React, {useState, useEffect} from "react";
import { choosePerson } from "../services/requests";
import { ContainerCard, ContainerTexto } from "./styled";

export const Card = (props)=>{
 
    return(
        <>
        {props.match && 
        <ContainerCard photo={props.match.photo} joker={props.match.name} alt={props.match.photo_alt}>
           <div>
            <ContainerTexto> 
            <p><strong>{props.match.name},</strong> {props.match.age}</p>
            <p>{props.match.bio}</p>
            </ContainerTexto>
            <div>
            <button onClick={()=> choosePerson( props.match.id,false, props.setMatch)}>Não</button>
                <button onClick={()=> choosePerson( props.match.id,true, props.setMatch)}>Sim</button>
                </div>
                </div>
        </ContainerCard>
}</>)
}