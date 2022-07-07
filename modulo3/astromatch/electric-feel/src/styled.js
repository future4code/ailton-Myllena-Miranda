import styled from "styled-components";


export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100vh;
background-color:pink;

`

export const ContainerPage = styled.div`
width:32%;
height:95%;
background-color:white;
@media screen and (max-width: 480px) {
    height: 100vh;
    width: 100vw;
  }
`