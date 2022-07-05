import axios from "axios"
import { BASE_URL } from "../constants/Url"
// função para o app//
export const todesPokemons = (saveData)=>{
    axios
    .get(`${BASE_URL}?limit=151`)
    .then((res)=> saveData(res.data.results))
    .catch((err)=> console.log(err.response))
}

//função para o PokeCard//

export const pegaPokemon = (pokeName, saveData) =>{
    axios
    .get(`${BASE_URL}${pokeName}`)
    .then((res)=> saveData(res.data))
    .catch(err=>{
        console.log(err);
    });
};