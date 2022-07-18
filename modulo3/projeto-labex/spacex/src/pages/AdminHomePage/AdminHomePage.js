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
import { useLoading } from "../../services/hooks/useLoading";




export default function AdminHomePage() {
  useProtectedPage()
  const navigate = useNavigate();
  const [listaTrips,setListaTrips] = useState([])
  const[isLoading, error, setIsLoading, setError] = useLoading()

  useEffect(()=>{
  GetTrips(setListaTrips,setIsLoading, setError)
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
          <ContainerBotoes>
          <button onClick={() => goToCreateTripPage(navigate)}>
            Criar Viagem
          </button>
          <button onClick={logout}>Logout</button>
        </ContainerBotoes>
        </ContainerPainel>
        <h2>Viagens Ativas:</h2>
        <ContainerTrips>
        {isLoading && <p>Carregando...</p>}
{!isLoading && error && <p>{error.message}</p>}
{!isLoading && listaTrips && listaTrips.length > 0  &&
          <>
          {listaTrips.map((item)=>{
            return <CardAdmin setListaTrips={setListaTrips} item={item}/>
          })}
         </>}
         {!isLoading && listaTrips && listaTrips.length === 0 && <p>Não há nenhuma viagem disponível no momento :(</p>}
        </ContainerTrips>
      </MainAdm>
    </ContainerAdm>
  );
}
