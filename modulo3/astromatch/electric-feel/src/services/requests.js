import axios from "axios";
import { BASE_URL } from "../constants/Url";

//Retorna um perfil que ainda não foi visto por você//

export const getProfileToChoose = (saveData)=>{
    axios
    .get(`${BASE_URL}myllena/person`)
    .then((res)=> saveData(res.data.profile))
    .catch((err)=> console.log(err))
}

//Retorna um array de perfis que deram match com você.//
export const getMatches = (saveData) =>{
    axios
    .get(`${BASE_URL}myllena/matches`)
    .then((res)=> saveData(res.data.matches))
    .catch((err)=> console.log(err))
}

//Recebe um id e uma escolha (choice). A escolha é a opção do usuário no momento do swipe.//
// Deve ser true ou false.//

export const choosePerson = (id, choice, saveData) =>{
    const body = {
        id: id,
        choice: choice
    }
axios
.post(`${BASE_URL}myllena/choose-person`,body)
.then(getProfileToChoose(saveData))
.catch((err)=> console.log(err))
}

//Limpa todos os matches e perfis vistos.//

export const clear=() =>{
    axios
    .put(`${BASE_URL}myllena/clear`)
    .then((res)=> console.log(res))
}