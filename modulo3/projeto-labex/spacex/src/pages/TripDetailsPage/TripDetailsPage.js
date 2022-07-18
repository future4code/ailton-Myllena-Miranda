import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import { GetTripDetail, DecideCandidate } from '../../services/requests/requests';
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../../services/hooks/useProtectedPage';
import { HeaderPrivate } from '../../components/HeaderPrivate';
import { ContainerTripDetails, MaintripDetails,TripBox,ContainerCandidates, 
  CandidatesPendent, CandidatesApproved, CardAproved, CardPendent, DivSemDescription,
  ContainerBotoes} from './styled';
  import { useLoading } from "../../services/hooks/useLoading";
  import loading from "../../assets/loading2.png";
  import { Loading } from "../styled";



export default function TripDetailsPage() {
  const[isLoading, error, setIsLoading, setError] = useLoading()
  useProtectedPage()
  const params = useParams();
  const[trip, setTrip] = useState({});
  const navigate = useNavigate();
  

useEffect(()=>{
 
    const token = localStorage.getItem("token")
    GetTripDetail(params.id, setTrip,token, setIsLoading, setError)
},[]);
  
const objetoVazio = {}
console.log(!objetoVazio)
  return (
    <ContainerTripDetails>
      <HeaderPrivate/>
      <MaintripDetails>
        <TripBox>
        {isLoading && <Loading src={loading}/>}
{!isLoading && error && <p>{error.message}</p>}
      {!isLoading && trip && trip !== objetoVazio &&
       <><h1>{trip.name}</h1>
      <div>
        <p>Descrição: {trip.description}</p>
        <DivSemDescription >
        <p>Data: {trip.date}</p>
        <p>Duração: {trip.durationInDays} dias</p>
        <p>Planeta: {trip.planet}</p>
        </DivSemDescription>
        </div></>}
        {!isLoading && trip && trip===objetoVazio && <p>Não há dados</p>}
      </TripBox>
      <ContainerCandidates>
        <CandidatesPendent>
        <h2>Candidatos Pendentes</h2>
        {isLoading && <Loading src={loading}/>}
{!isLoading && error && <p>{error.message}</p>}
{!isLoading && trip.candidates && trip.candidates.length > 0  &&
  <>
  {trip.candidates?.map((item, index)=>{
    return(
      <CardPendent>
      <p><strong>{item.name}</strong></p>
      <p>Idade: {item.age}</p>
      <p>Descrição: {item.applicationText}</p>
      <p>Profissão: {item.profession}</p>
      <p>País: {item.country}</p>
      <ContainerBotoes>
      <button onClick={()=>DecideCandidate(trip.id, item.id,true,setTrip,setIsLoading)}>Autorizar</button>
      <button onClick={()=>DecideCandidate(trip.id, item.id,false,setTrip,setIsLoading)}>Não autorizar</button>
  
      </ContainerBotoes>
      </CardPendent>
    )
  })}
    </>}
    {!isLoading && trip.candidates && trip.candidates.length === 0 && <strong>Não há candidatos pendentes</strong>}
        </CandidatesPendent>
        <CandidatesApproved>
          <h2>Candidatos Aprovados</h2>
          {isLoading && <Loading src={loading}/>}
{!isLoading && error && <p>{error.message}</p>}
{!isLoading && trip.approved && trip.approved.length > 0  &&
 <>
          {trip.approved?.map((item)=>{
            return(
              <CardAproved>
              <p><strong>{item.name}</strong></p>
              <p>Idade: {item.age}</p>
              <p>Descrição: {item.applicationText}</p>
              <p>Profissão: {item.profession}</p>
              <p>País: {item.country}</p>
              </CardAproved>
            )
          })}
           </>}
           {!isLoading && trip.approved && trip.approved.length === 0 && <strong>Não há candidatos aprovados</strong>}
        </CandidatesApproved>
      </ContainerCandidates>
      </MaintripDetails>
    </ContainerTripDetails>
  )
}
