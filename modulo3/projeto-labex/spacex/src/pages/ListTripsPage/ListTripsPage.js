import React,{useState, useEffect} from 'react';
import { HeaderPublic } from '../../components/HeaderPublic';
import { ContainerList, MainList, ContainerCardsList } from './styled';
import {GetTrips} from "../../services/requests/requests";
import CardListTrips from '../../components/CardListTrips/CardListTrips';


export default function ListTripsPage() {
  const [listaTrips,setListaTrips] = useState([])

  useEffect(()=>{
GetTrips(setListaTrips)
  }, [])
  return (

    <ContainerList>
      <HeaderPublic/>
      <MainList>
        <div>
      <h1>ListTripsPage</h1>
      </div>
      <ContainerCardsList>
        {listaTrips.map((item)=>{
          return(
            <CardListTrips item={item}/>
          )
        })}
      </ContainerCardsList>
      </MainList>
      </ContainerList>
  )
};
