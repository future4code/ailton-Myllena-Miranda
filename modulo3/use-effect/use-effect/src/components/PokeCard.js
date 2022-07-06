import React, {useState, useEffect} from "react";
import { pegaPokemon } from "../services/requests";
import { ContainerCard } from "./styled";

export const PokeCard =(props)=>{

    const[pokemon, setPokemon]= useState({})

useEffect(()=>{
pegaPokemon(props.pokemon,setPokemon)
},[pokemon])



    return(
        <ContainerCard>
             {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        )}
        <p><strong>{pokemon.name}</strong></p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
       
        </ContainerCard>
    )

}