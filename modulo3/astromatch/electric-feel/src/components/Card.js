import React from "react";
import { ContainerCard, ContainerTexto } from "./styled";

export const Card = (props)=>{
    return(
        <ContainerCard photo={props.match.photo} alt={props.match.photo_alt}>
           <div>
            <ContainerTexto> 
            <p><strong>{props.match.name},</strong> {props.match.age}</p>
            <p>{props.match.bio}</p>
            </ContainerTexto>
            <div>
            <button>Não</button>
                <button>Sim</button>
                </div>
                </div>
        </ContainerCard>
    )
}