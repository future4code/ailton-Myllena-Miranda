import React from "react";
import styled from "styled-components";
import chihiro from '../img/chihiro.jpeg';


const Container = styled.div`
width: 100vw;
height:100vh;
background-image: url(${chihiro});
`
const ContainerItens = styled.div`
margin-top:80px;
background-color:#d9e0a3;
opacity:90%;
display:flex;
flex-direction:column;
align-items:center;
justify-items:center;
justify-content:flex-start;
border:solid 1px white;
width: 50%;
height:  50%;
border-radius:16px;
`
const BotaoBonitin = styled.button`
background-color: #DF9B76;
color:white;
font-weight:bold;
border:none;
padding:7px 5px;
border-radius:6px;
margin-left:5px;
`
const BotaoTela = styled.button`
background-color: #9C9976;
color:white;
font-weight:bold;
border:none;
padding:15px 20px;
font-size:17px;
border-radius:6px;
margin-left:5px;
margin-top:5px;
`
const Inputo =styled.input`
padding:5px;
border-radius:6px;
border:solid 2px white;
margin-left:5px;
`
const ArrumaDivInputo= styled.div`
margin-top:50px;
`
const Titulo = styled.h1`
border-bottom: solid 1px #E3514E;
color:#E3514E;
margin-top:40px;
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
export class TelaInicial extends React.Component {
   
    render(){
        return(
            <Container>
                <Cabecalho>
            <BotaoTela onClick={this.props.goTelaDetalhes}>Usuários</BotaoTela>
            </Cabecalho>
            <Main>
            <ContainerItens>
            <Titulo>Crie seu Usuário</Titulo>
            <ArrumaDivInputo>
                <Inputo name={'nome'} placeholder={'digite seu nome'} onChange={this.props.onChangeNome} value={this.props.inputNome}/>
                <Inputo name={'e-mail'} placeholder={'digite seu e-mail'} onChange={this.props.onChangeEmail} value={this.props.inputEmail}/>
                <BotaoBonitin onClick={this.props.createUser}>Criar Usuário</BotaoBonitin>
            </ArrumaDivInputo>
            </ContainerItens>
            </Main>
           </Container>
        )
    }
}