import React, {useState, useEffect} from "react";
import { goToLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
    const navigate = useNavigate();
    
    useEffect(()=>{
        const token = window.localStorage.getItem('token')
        if(token === null){
            console.log("Não ta logado")
            goToLoginPage(navigate)
        }
    },[window.localStorage.getItem('token') ===null])

}
