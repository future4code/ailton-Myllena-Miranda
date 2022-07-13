import React from "react";
import { ContainerCardHome, PlanetaLua, ContainerImg,ContainerTextoDesc} from "./styled";
export default function CardHome(props) {
 
  return (
    <ContainerCardHome onClick={props.page}>
      <ContainerImg>
        <PlanetaLua src={props.img}/>
        </ContainerImg>
        <ContainerTextoDesc>
        <p>{props.viagem}</p>
        <p><strong>{props.planeta}</strong></p>
        </ContainerTextoDesc>
    </ContainerCardHome>
  )
}
