import React from "react";
import { ContainerCardAdmin } from "./styled";



export default function CardAdmin(props) {
  return (
    <ContainerCardAdmin>
        <p>{props.item.name}</p>
        <p>{props.item.planet}</p>
        <div>
          <button>Detalhes</button>
          <button>Deletar viagens</button>
        </div>
    </ContainerCardAdmin>
  )
}
