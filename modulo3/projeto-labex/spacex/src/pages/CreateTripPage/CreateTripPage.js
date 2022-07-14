import React, {useEffect} from 'react'
import { goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from "react-router-dom";

export default function CreateTripPage() {
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if (!token) {
      goToLoginPage(navigate);
    };
  },[]);
  return (
    <div>CreateTripPage</div>
  )
}
