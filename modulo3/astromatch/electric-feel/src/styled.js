import styled from "styled-components";


export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100vh;

`

export const ContainerPage = styled.div`
width:33vw;
height:97vh;
background-color:white;
@media screen and (max-width: 480px) {
    height: 100vh;
    width: 100vw;
  }
`
export const ButtonLimpa = styled.img`
width:120px;
margin:0 auto;
cursor: pointer;
`