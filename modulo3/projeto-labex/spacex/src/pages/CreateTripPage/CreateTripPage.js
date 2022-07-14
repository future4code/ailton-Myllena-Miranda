import React, {useState, useEffect} from 'react'
import { goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../../services/hooks/useProtectedPage';
import { useForm } from '../../services/hooks/useForm';

export default function CreateTripPage() {
  useProtectedPage()
  const[form, onChange]=useForm({name:"", planet:"", date:"", description:"", durationInDays:""})
 
  return (
    <div>
      <h1>CreateTripPage</h1>
      <form>
        <input
        name='name'
        placeholder='name'

        />
      </form>
      </div>
  )
}
