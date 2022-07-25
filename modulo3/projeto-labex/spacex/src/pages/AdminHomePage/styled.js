import styled from "styled-components";
import fundo from "../../assets/space.jpg";

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
h2{
    color:white;
    text-shadow:1.3px 1.3px 2px #5E15EB;
}
`
export const ContainerPainel = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
background-color:rgba(198, 164, 154, 0.58);
border-radius:15px;
width:60vw;
height:18vh;
margin-top:60px;
margin-bottom:30px;
@media screen and (max-width: 480px){
    width:90vw; 
}
h1{
    margin-top:10px;
    color:white;
    text-shadow:1.3px 1.3px 2px #5E15EB;
}

`
export const ContainerBotoes =styled.div`
display:flex;
justify-content:space-between;
width:58vw;
button{
    cursor: pointer;
    width:98px;
    height:30px;
    border-radius:14px;
    border:none;
    background-color:#5E15EB;
    color:white;
    font-weight:bold;
    text-shadow:1px 1px 2px black;
}
`
export const ContainerTrips = styled.div`
display:flex;
flex-wrap: wrap;
gap: 30px;
align-items:center;
justify-content:center;
width:100%;
height:100%;
margin-top:20px;

`
//fazer um grid de 2/2//