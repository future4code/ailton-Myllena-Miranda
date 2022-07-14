import React from 'react';
import { useState,useEffect } from 'react';
import { LoginAdm } from '../../services/requests/requests';
import { goToAdminHomePage } from '../../routes/coordinator';
import {useNavigate} from "react-router-dom" ; 
import { HeaderPublic } from '../../components/HeaderPublic';


export default function LoginPage() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate()


const onChangeEmail = (event)=>{
  setEmail(event.target.value)
  };

const onChangePassword = (event)=>{
setPassword(event.target.value)
};


  return (
    <div>
      <HeaderPublic/>
      <main>
      <h1>Login</h1>
      <input placeholder="email" type="email" value={email} onChange={onChangeEmail} />
      <input placeholder="password" type="password" value={password} onChange={onChangePassword}/>
      <button onClick={()=>LoginAdm(email, password,goToAdminHomePage,navigate,setEmail,setPassword)}>Entrar</button>
      </main>
    </div>
  )
}
