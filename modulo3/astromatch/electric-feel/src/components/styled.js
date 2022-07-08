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
background-position: ${(props)=>props.joker==="Joker"?"center top left":"center top"};
background-size:cover;
border-radius:2%;
strong{
    font-size:25px;   
}
`

export const ContainerTexto = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
gap:5px;
margin-left:3px;
width:100%;
@media screen and (max-width: 480px) {
  text-align:center;
  strong{
    margin-left:2px;
  }
  }
`

export const Sim = styled.img`
width:70px;
margin-right:20px;
cursor: pointer;
`

export const Nao = styled.img`
width:67px;
margin-left:20px;
cursor: pointer;
`
export const DivButton = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:4px;
margin-bottom:4px;
`

export const Loading =styled.img`
 animation: rotateLoad 2s infinite linear;
  @keyframes rotateLoad {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`