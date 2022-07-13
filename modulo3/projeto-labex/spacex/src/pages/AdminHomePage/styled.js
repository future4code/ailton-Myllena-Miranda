import styled from "styled-components";
import fundo from "../../assets/spacePages.jpg";

export const ContainerAdm = styled.div`
width:100%;
height:100vh;
max-height:100vh;
overflow:auto;
background-image: url(${fundo});
background-size:cover;
background-position:center;
background-repeat:none;
`
export const MainAdm = styled.main`
width:100%;
min-height:90vh;
display:flex;
flex-direction:column;
align-items:center;
`
export const ContainerPainel = styled.div`
display:flex;
align-items:center;
justify-content:center;
border:solid black 2px;
width:60vw;
height:18vh;
margin-top:60px;
`
export const ContainerBotoes =styled.div`
display:flex;
justify-content:space-between;
width:60vw;
`
export const ContainerTrips = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:60vh;
height:100%;
margin-top:20px;
`
//fazer um grid de 2/2//