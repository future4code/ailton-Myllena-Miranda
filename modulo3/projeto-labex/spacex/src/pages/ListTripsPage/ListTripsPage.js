import React,{useState, useEffect} from 'react';
import { HeaderPublic } from '../../components/HeaderPublic';
import { ContainerList, MainList, ContainerCardsList, Title,ContainerButtonList } from './styled';
import {GetTrips} from "../../services/requests/requests";
import CardListTrips from '../../components/CardListTrips/CardListTrips';
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationFormPage } from '../../routes/coordinator';


export default function ListTripsPage() {
  const navigate = useNavigate();
  const [listaTrips,setListaTrips] = useState([])

  useEffect(()=>{
GetTrips(setListaTrips)
  }, [])
  return (

    <ContainerList>
      <HeaderPublic/>
      <MainList>
        <Title>
      <h1>Viagens Disponíveis</h1>
      <ContainerButtonList>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
      <button onClick={()=>goToApplicationFormPage(navigate)}>Candidatar</button>
      </ContainerButtonList>
      </Title>
      <ContainerCardsList>
        {listaTrips.map((item)=>{
          return(
            <CardListTrips item={item}/>
          )
        })}
      </ContainerCardsList>
      </MainList>
      </ContainerList>
  )
};
