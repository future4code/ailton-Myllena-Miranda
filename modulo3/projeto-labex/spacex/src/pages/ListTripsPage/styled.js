import styled from "styled-components";
import back from "../../assets/space.jpg"

export const ContainerList = styled.div`
width:100%;
height:100%;
max-height:100vh;
overflow:auto;
background-image: url(${back});
background-position:center;
background-repeat:none;
background-size:cover;
`
export const MainList = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height:90vh;
`
export const ContainerCardsList = styled.div`
width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 25px 10px;
`