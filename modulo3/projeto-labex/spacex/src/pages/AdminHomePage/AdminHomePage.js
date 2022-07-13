import React, {useState, useEffect} from "react";
import { HeaderPrivate } from "../../components/HeaderPrivate";
import {
  ContainerAdm,
  MainAdm,
  ContainerPainel,
  ContainerBotoes,
  ContainerTrips,
} from "./styled";
import { goToCreateTripPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import CardAdmin from "../../components/CardAdmin/CardAdmin";
import {GetTrips} from "../../services/requests/requests";



export default function AdminHomePage() {
  const navigate = useNavigate();
  const [listaTrips,setListaTrips] = useState([])

  useEffect(()=>{
  GetTrips(setListaTrips)
  },[])

  return (
    <ContainerAdm>
      <HeaderPrivate />
      <MainAdm>
        <ContainerPainel>
          <h1>Painel de controle</h1>
        </ContainerPainel>
        <ContainerBotoes>
          <button onClick={() => goToCreateTripPage(navigate)}>
            Criar Viagem
          </button>
          <button>Logout</button>
        </ContainerBotoes>
        <ContainerTrips>
          <h2>Viagens Ativas:</h2>
          {listaTrips.map((item)=>{
            return <CardAdmin item={item}/>
          })}
      
        </ContainerTrips>
      </MainAdm>
    </ContainerAdm>
  );
}
