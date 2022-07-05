import React, {useState, useEffect} from "react";
import { pegaPokemon } from "../services/requests";

export const PokeCard =(props)=>{

    const[pokemon, setPokemon]= useState({})

useEffect(()=>{
pegaPokemon(props.pokemon,setPokemon)
},[props.pokemon])



    return(
        <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        </div>
    )

}