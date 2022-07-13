import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import { GetTripDetail } from '../../services/requests/requests';



export default function TripDetailsPage() {
  const params = useParams()
  const[trip, setTrip] = useState({})
useEffect(()=>{
  const token = localStorage.getItem("token")
GetTripDetail(params.id, setTrip,token)
},[])
  return (
    <div>
      <h1>TripDetailsPage</h1>
       <h2>{trip.name}</h2>
    </div>
  )
}
