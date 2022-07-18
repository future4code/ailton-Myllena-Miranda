import React from 'react';
import { ContainerCardListTrips } from './styled';

export default function CardListTrips(props) {

  return (
    <ContainerCardListTrips>
        <p><strong>{props.item.name}</strong></p>
        <p>Descrição: {props.item.description}</p>
        <p>Planeta: {props.item.planet}</p>
        <p>Duração: {props.item.durationInDays} dias</p>
        <p>Data: {props.item.date}</p>
        </ContainerCardListTrips>
  )
}
