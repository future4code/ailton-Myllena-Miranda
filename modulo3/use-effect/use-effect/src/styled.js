import styled from "styled-components";
import pokemon from "./assets/pokemon.jpg"

export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height:100vh;
background-image:url(${pokemon});
background-position:center;
background-size:cover;
background-repeat:no-repeat;

`

export const Selected = styled.select`
margin-top:10px;
width:20%;
height:5%;
border-radius:20px;
background-color:pink;
opacity:77%;
font-weight:bold;
`