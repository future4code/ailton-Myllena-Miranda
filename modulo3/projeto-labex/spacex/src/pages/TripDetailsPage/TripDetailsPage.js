import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import { GetTripDetail } from '../../services/requests/requests';
import { goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../../services/hooks/useProtectedPage';



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
      <h1>TripDetailsPage</h1>
       <h2>{trip.name}</h2>
    </div>
  )
}
