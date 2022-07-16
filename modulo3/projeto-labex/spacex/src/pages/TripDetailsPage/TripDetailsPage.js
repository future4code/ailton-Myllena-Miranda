import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import { GetTripDetail, DecideCandidate } from '../../services/requests/requests';
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../../services/hooks/useProtectedPage';
import { HeaderPrivate } from '../../components/HeaderPrivate';
import { ContainerTripDetails, MaintripDetails,TripBox,ContainerCandidates, 
  CandidatesPendent, CandidatesApproved, CardAproved, CardPendent, DivSemDescription,
  ContainerBotoes} from './styled';



export default function TripDetailsPage() {
  useProtectedPage()
  const params = useParams();
  const[trip, setTrip] = useState({});
  const navigate = useNavigate();
useEffect(()=>{
  const token = localStorage.getItem("token")
GetTripDetail(params.id, setTrip,token)
},[]);

  return (
    <ContainerTripDetails>
      <HeaderPrivate/>
      <MaintripDetails>
        <TripBox>
      <h1>{trip.name}</h1>
      <div>
        <p>Descrição: {trip.description}</p>
        <DivSemDescription >
        <p>Data: {trip.date}</p>
        <p>Duração: {trip.durationInDays} dias</p>
        <p>Planeta: {trip.planet}</p>
        </DivSemDescription>
        </div>
      </TripBox>
      <ContainerCandidates>
        <CandidatesPendent>
          <h2>Candidatos Pendentes</h2>
          {trip.candidates?.map((item, index)=>{
            return(
              <CardPendent>
              <p><strong>{item.name}</strong></p>
              <p>Idade: {item.age}</p>
              <p>Descrição: {item.applicationText}</p>
              <p>Profissão: {item.profession}</p>
              <p>País: {item.country}</p>
              <ContainerBotoes>
              <button onClick={()=>DecideCandidate(trip.id, item.id,true,setTrip)}>Autorizar</button>
              <button onClick={()=>DecideCandidate(trip.id, item.id,false,setTrip)}>Não autorizar</button>
              </ContainerBotoes>
              </CardPendent>
            )
          })}
        </CandidatesPendent>
        <CandidatesApproved>
          <h2>Candidatos Aprovados</h2>
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
        </CandidatesApproved>
      </ContainerCandidates>
      </MaintripDetails>
    </ContainerTripDetails>
  )
}
