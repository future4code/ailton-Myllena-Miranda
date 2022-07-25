import React,{useState, useEffect} from 'react';
import { HeaderPublic } from '../../components/HeaderPublic';
import { ContainerList, MainList, ContainerCardsList, Title,ContainerButtonList } from './styled';
import {GetTrips} from "../../services/requests/requests";
import CardListTrips from '../../components/CardListTrips/CardListTrips';
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationFormPage } from '../../routes/coordinator';
import { useLoading } from '../../services/hooks/useLoading';
import loading from "../../assets/loading2.png";
import { Loading } from "../styled";


export default function ListTripsPage() {
  const navigate = useNavigate();
  const [listaTrips,setListaTrips] = useState([])
  const[isLoading, error, setIsLoading, setError] = useLoading()

  useEffect(()=>{
GetTrips(setListaTrips,setIsLoading, setError)
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
      {isLoading && <div><Loading src={loading}/></div>}
{!isLoading && error && <p>{error.message}</p>}
{!isLoading && listaTrips && listaTrips.length > 0  &&
            <>
        {listaTrips.map((item)=>{
          return(
            <CardListTrips item={item}/>
          )
        })}
        </>}
        {!isLoading && listaTrips && listaTrips.length === 0 && <strong>Não há nenhuma viagem disponível no momento :(</strong>}
      </ContainerCardsList>
      </MainList>
      </ContainerList>
  )
};
