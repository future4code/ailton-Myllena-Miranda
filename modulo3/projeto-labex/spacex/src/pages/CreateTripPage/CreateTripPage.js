import React, {useState, useEffect} from 'react'
import { goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../../services/hooks/useProtectedPage';
import { useForm } from '../../services/hooks/useForm';
import { HeaderPrivate } from '../../components/HeaderPrivate';
import { ContainerMainCreateTrip,ContainerPageCreateTrip, FormCreateTrip  } from './styled';
import { CreateTrip } from '../../services/requests/requests';


export default function CreateTripPage() {
  useProtectedPage()
  const[form, onChange, Clear]=useForm({name:"", planet:"", date:"", description:"", durationInDays:""})

  const handleClick = (event)=>{
    const token = localStorage.getItem("token")
    event.preventDefault()
    CreateTrip(form, token)
     Clear()
  }


  return (
    <ContainerPageCreateTrip>
      <HeaderPrivate/>
      <ContainerMainCreateTrip>
      <h1>Criar viagem</h1>
      <FormCreateTrip onSubmit={handleClick}>
        <input
        name='name'
        value={form.name}
        onChange={onChange}
        placeholder='nome'
        />

      <select name='planet'onChange={onChange} value={form.planet}>
      <option selected disabled value="">Escolha um planeta</option>
        <option >Lua</option>
        <option >Marte </option>
        <option >Júpiter</option>
        <option >Plutão</option>
        <option >Saturno</option>
      </select>
        <input
        name='date'
        value={form.date}
        onChange={onChange}
        placeholder='data'
        type="date"
        min={new Date().toISOString().slice(0,10)}
        />
        <input
        name='description'
        value={form.description}
        onChange={onChange}
        placeholder='descrição'
        />
        <input
        name='durationInDays'
        value={form.durationInDays}
        onChange={onChange}
        placeholder='quantidade de dias'
        type='number'
        min='1'
        />
        <button>Criar Viagem</button>
      </FormCreateTrip>

      </ContainerMainCreateTrip>
      </ContainerPageCreateTrip>
  )
}
