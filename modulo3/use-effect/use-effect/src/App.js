import React, {useState, useEffect} from "react";
import {PokeCard } from "./components/PokeCard";
import { todesPokemons } from "./services/requests";


function App() {

  const [pokeList,setPokeList] = useState([])
  const [pokeName,setPokeName] = useState("")

useEffect(()=>{
todesPokemons(setPokeList)
},[])


const changePokeName = event =>{
  setPokeName(event.target.value)
}

  return (
    <div>
  <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
  );
}

export default App;
