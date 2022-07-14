import React, {useState, useEffect} from 'react';
import { HeaderPublic } from '../../components/HeaderPublic';
import { useForm } from '../../services/hooks/useForm';
import { listCountries } from '../../constants/listCountries';
import { ApplyToTrip, GetTrips } from '../../services/requests/requests';


export default function ApplicationFormPage() {
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
    <div>
      <HeaderPublic/>
      <main>
       <h1>Selecione uma viagem</h1>

       <form onSubmit={handleClick}>
       <select name='trip' value={form.trip} onChange={onChange}>
       <option selected disabled value="">Escolha uma viagem</option>
         {trips.map((item)=>{
          return <option key={item.id} value={item.id}>{item.name}</option>
         })}
       </select>

       <input
        name='name'
        value={form.name}
        onChange={onChange}
        placeholder='nome'
        />

        <input
        name='age'
        value={form.age}
        onChange={onChange}
        placeholder='idade'
        type="number"
        min={18}
        />
        <input
        name='applicationText'
        value={form.applicationText}
        onChange={onChange}
        placeholder='sobre mim'
        />
        <input
        name='profession'
        value={form.profession}
        onChange={onChange}
        placeholder='profissão'
        />
        <select  name='country' onChange={onChange} value={form.country}>
        <option selected disabled value="">nacionalidade</option>
        {listCountries.map((item,index)=>{
             return <option key={index}>{item}</option>
          })}
       </select>
        <button>Se candidatar para a viagem</button>
       </form>
       </main>

      
      </div>
  )
}
