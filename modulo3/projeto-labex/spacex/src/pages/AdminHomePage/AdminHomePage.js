import React from "react";
import { HeaderPrivate } from "../../components/HeaderPrivate";
import { ContainerAdm, MainAdm,ContainerPainel,ContainerBotoes, 
  ContainerTrips } from "./styled";
  import { goToCreateTripPage} from "../../routes/coordinator";
  import {useNavigate} from "react-router-dom" ; 



export default function AdminHomePage() {
  const navigate = useNavigate()

  return (
    <ContainerAdm>
      <HeaderPrivate/>
      <MainAdm>
        <ContainerPainel>
      <h1>Painel de controle</h1>
      </ContainerPainel>
      <ContainerBotoes>
        <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</button>
        <button>Logout</button>
      </ContainerBotoes>
      <ContainerTrips>
      <h2>Viagens Ativas:</h2>
      <p>Lua</p>
      <p>Marte</p>
      <p>Plutão</p>
      </ContainerTrips>
      </MainAdm>
</ContainerAdm>
  )
}
