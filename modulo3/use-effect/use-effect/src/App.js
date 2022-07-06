import React, {useState, useEffect} from "react";
import {PokeCard } from "./components/PokeCard";
import { todesPokemons } from "./services/requests";
import { Container, Selected } from "./styled"


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
    <Container>
  <Selected onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </Selected>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </Container>
  );
}

export default App;
