import React, {useState} from 'react'

export const useForm = (initialState) => {
const [form, setForm] = useState(initialState)
const Clear = ()=>{
  setForm(initialState)
}
const onChange =(event)=>{
    const {name, value} = event.target
    setForm({...form, [name]:value})
}
  return [form, onChange, Clear]
}
