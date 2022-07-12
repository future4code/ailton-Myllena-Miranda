import styled from "styled-components";
import space from "../../assets/space.jpg"

export const MainHome = styled.main`
width:100%;
height:90vh;
display:flex;
flex-direction:column;
align-items:center;
`

export const ContainerHome = styled.div`
width:100%;
height:100%;
background-image:url(${space});
background-position:center;
background-repeat:none;
background-size:cover;
`

export const ContainerCardHome = styled.div`
width:85vw;
height:27vh;
border: solid black 2px;
display:flex;
align-items:center;
justify-content:space-around;
`

