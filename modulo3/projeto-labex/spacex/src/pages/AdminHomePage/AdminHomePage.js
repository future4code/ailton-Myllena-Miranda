import React, {useState, useEffect} from "react";
import { HeaderPrivate } from "../../components/HeaderPrivate";
import {
  ContainerAdm,
  MainAdm,
  ContainerPainel,
  ContainerBotoes,
  ContainerTrips,
} from "./styled";
import { goToCreateTripPage, goToHomePage , goToLoginPage} from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import CardAdmin from "../../components/CardAdmin/CardAdmin";
import {GetTrips} from "../../services/requests/requests";
import { useProtectedPage } from "../../services/hooks/useProtectedPage";



export default function AdminHomePage() {
  useProtectedPage()

  const navigate = useNavigate();
  const [listaTrips,setListaTrips] = useState([])

  useEffect(()=>{
  GetTrips(setListaTrips)
  },[]);

  const logout =()=>{
    window.localStorage.setItem("token", "")
    goToLoginPage(navigate)
    };

  return (
    <ContainerAdm>
      <HeaderPrivate/>
      <MainAdm>
        <ContainerPainel>
          <h1>Painel de controle</h1>
        </ContainerPainel>
        <ContainerBotoes>
          <button onClick={() => goToCreateTripPage(navigate)}>
            Criar Viagem
          </button>
          <button onClick={logout}>Logout</button>
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
