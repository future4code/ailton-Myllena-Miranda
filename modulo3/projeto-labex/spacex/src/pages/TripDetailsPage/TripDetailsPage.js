import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import { GetTripDetail } from '../../services/requests/requests';
import { goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from "react-router-dom";



export default function TripDetailsPage() {
  const params = useParams();
  const[trip, setTrip] = useState({});
  const navigate = useNavigate();
useEffect(()=>{
  const token = localStorage.getItem("token")
  if (!token) {
    goToLoginPage(navigate);
  };
GetTripDetail(params.id, setTrip,token)
},[]);

  return (
    <div>
      <h1>TripDetailsPage</h1>
       <h2>{trip.name}</h2>
    </div>
  )
}
