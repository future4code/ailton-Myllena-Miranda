import styled from "styled-components";

export const ContainerCard = styled.div`
display:flex;
justify-content:center;
align-items:flex-end;
width:95%;
height:95%;
color:white;
text-shadow: 1px 1px 2px black;
font-size:20px;
background-image: url(${(props)=> props.photo});
background-position: center end;
background-size:cover;
border-radius:2%;
strong{
    font-size:25px;   
}
@media screen and (max-width: 480px) {
    background-position: center;
  }
`

export const ContainerTexto = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
gap:5px;
margin-left:5px;
width:98%;
@media screen and (max-width: 480px) {
  text-align:center;
  strong{
    margin-left:2px;
  }
  }
`