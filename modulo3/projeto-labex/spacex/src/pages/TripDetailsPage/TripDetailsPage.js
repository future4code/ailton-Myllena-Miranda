import React from 'react';
import {useParams} from "react-router-dom";


export default function TripDetailsPage() {
  const params = useParams()
  console.log(params.id) //lembrar//
  return (
    <div>
      <h1>TripDetailsPage</h1>
       
    </div>
  )
}
