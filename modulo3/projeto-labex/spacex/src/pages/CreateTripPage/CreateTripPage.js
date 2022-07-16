import React, {useState, useEffect} from 'react'
import { goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../../services/hooks/useProtectedPage';
import { useForm } from '../../services/hooks/useForm';
import { HeaderPrivate } from '../../components/HeaderPrivate';
import { ContainerMainCreateTrip,ContainerPageCreateTrip, FormCreateTrip, CreateTripBox  } from './styled';
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
        <CreateTripBox>
      <h1>Criar viagem</h1>
      <FormCreateTrip onSubmit={handleClick}>
        <input
        name='name'
        value={form.name}
        onChange={onChange}
        placeholder='Título da viagem'
        required
        pattern={"^.{3,}"}
       title={"A aplicação deve ter no mínimo 3 caracteres"}
        />

      <select name='planet'onChange={onChange} value={form.planet}>
      <option selected disabled value="">Escolha um planeta</option>
      <option >Alderaan</option>
        <option >Illum</option>
        <option >Coruscant</option>
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
        placeholder='Descrição da viagem'
        required
        pattern={"^.{30,120}"}
       title={"A aplicação deve ter no mínimo 30 caracteres e no máximo 120"}
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
      </CreateTripBox>
      </ContainerMainCreateTrip>
      </ContainerPageCreateTrip>
  )
}
