import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import { GetTripDetail, DecideCandidate } from '../../services/requests/requests';
import { goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../../services/hooks/useProtectedPage';
import { HeaderPrivate } from '../../components/HeaderPrivate';



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
    <div>
      <HeaderPrivate/>
      <main>
      <h1>{trip.name}</h1>
      <div>
        <p>Descrição: {trip.description}</p>
        <p>Data: {trip.date}</p>
        <p>Duração: {trip.durationInDays} dias</p>
        <p>Planeta: {trip.planet}</p>
      </div>
      <div>
        <div>
          <h2>Candidatos Pendentes</h2>
          {trip.candidates?.map((item, index)=>{
            return(
              <div>
              <p>{item.name}</p>
              <p>{item.age}</p>
              <p>{item.applicationText}</p>
              <p>{item.profession}</p>
              <p>{item.country}</p>
              <button onClick={()=>DecideCandidate(trip.id, item.id,true,setTrip)}>Autorizar</button>
              <button onClick={()=>DecideCandidate(trip.id, item.id,false,setTrip)}>Não autorizar</button>
              </div>
            )
          })}
        </div>
        <div>
          <h2>Candidatos Aprovados</h2>
          {trip.approved?.map((item)=>{
            return(
              <div>
              <p>{item.name}</p>
              <p>{item.profession}</p>
              </div>
            )
          })}
        </div>
      </div>
      </main>
    </div>
  )
}
