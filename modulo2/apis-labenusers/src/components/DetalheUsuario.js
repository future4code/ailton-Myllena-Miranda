import React from "react";
import styled from "styled-components";
import fotin from "../img/tela3.jpeg"

const Container = styled.div`
width:100vw;
height:100vh;
background-image: url(${fotin});
`

const BotaoTela = styled.button`
background-color:#2C8FAE;
color:pink;
font-weight:bold;
border:none;
padding:10px 15px;
border-radius:6px;
margin-left:5px;
`
const Caixinha = styled.div`
width:50%;
height:100%;
background-color:#E3A6C7;
opacity:78%;
border-radius:16px;
margin-top:30px;
height:50%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Cabecalho = styled.header`
width:100%;
height:10vh;
`
const Main = styled.main`
width:100%;
height:90vh;
display:flex;
justify-content:center;
`

const Titulo = styled.h1`
color: white; 
`

export class DetalheUsuario extends React.Component {
render(){
    return(
        <Container>
            <Cabecalho>
            <BotaoTela onClick={this.props.goTelaDetalhes}>Voltar</BotaoTela>
            </Cabecalho>
            <Main>
            <Caixinha>
        <Titulo>Detalhe usuário</Titulo>
        </Caixinha>
        </Main>
        </Container>
    )
}

}