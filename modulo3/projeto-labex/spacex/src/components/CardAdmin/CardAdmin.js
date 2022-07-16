import React, {useEffect} from "react";
import { ContainerCardAdmin, ContainerButtonsCard } from "./styled";
import { goToTripDetailsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Delete } from "../../services/requests/requests";



export default function CardAdmin(props) {
  const navigate = useNavigate();


  return (
    <ContainerCardAdmin>
        <p><strong>{props.item.name}</strong></p>
        <p>Destino: {props.item.planet}</p>
        <ContainerButtonsCard>
          <button onClick={()=>goToTripDetailsPage(navigate, props.item.id)}>Detalhes</button>
          <button onClick={()=>Delete(props.item.id,props.setListaTrips)}>Excluir</button>
        </ContainerButtonsCard>
    </ContainerCardAdmin>
  )
}
