import React, {useState, useEffect} from 'react';
import { HeaderPublic } from '../../components/HeaderPublic';
import { useForm } from '../../services/hooks/useForm';
import { listCountries } from '../../constants/listCountries';
import { ApplyToTrip, GetTrips } from '../../services/requests/requests';
import { ContainerApp,  MainApp, Form, ContainerBoxApp, ButtonVoltar } from './styled';
import { goBack } from '../../routes/coordinator';
import { useNavigate } from "react-router-dom";


export default function ApplicationFormPage() {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([])
  const[form, onChange, Clear]=useForm({trip:"",
  name:"", age:"",applicationText:"",profession:"",
   country:"" })

   useEffect(()=>{
    GetTrips(setTrips)
   },[])

    const handleClick = (event)=>{
     event.preventDefault()
     ApplyToTrip(form)
    Clear()
  }
  
  return (
    <ContainerApp>
      <HeaderPublic/>
      <MainApp>
        <ContainerBoxApp>
       <h1>Inscreva-se para uma viagem</h1>
       <Form onSubmit={handleClick}>
       <select name='trip' value={form.trip} onChange={onChange}>
       <option selected disabled value="">Selecione uma viagem</option>
         {trips.map((item)=>{
          return <option key={item.id} value={item.id}>{item.name}</option>
         })}
       </select>

       <input
        name='name'
        value={form.name}
        onChange={onChange}
        placeholder='Nome'
        pattern={"^.{3,}"}
        title={"A aplicação deve ter no mínimo 3 caracteres"}
        />

        <input
        name='age'
        value={form.age}
        onChange={onChange}
        placeholder='Idade'
        type="number"
        min={18}
        />
        <input
        name='applicationText'
        value={form.applicationText}
        onChange={onChange}
        placeholder='Fale um pouco sobre você'
        required
        pattern={"^.{30,80}"}
       title={"A aplicação deve ter no mínimo 30 caracteres e no máximo 80"}
        />
        <input
        name='profession'
        value={form.profession}
        onChange={onChange}
        placeholder='Profissão'
        required
        pattern={"^.{3,}"}
        title={"A aplicação deve ter no mínimo 3 caracteres"}
        />
        <select  name='country' onChange={onChange} value={form.country}>
        <option selected disabled value="">Selecione sua nacionalidade</option>
        {listCountries.map((item,index)=>{
             return <option key={index}>{item}</option>
          })}
       </select>
        <button>Enviar</button>
       </Form>
       <ButtonVoltar onClick={()=>goBack(navigate)}>Voltar</ButtonVoltar>
       </ContainerBoxApp>
       </MainApp>

      
      </ContainerApp>
  )
}
