import React from "react";
import styled from "styled-components";


const Container = styled.div`
background-color: pink;
width: 100vw;
height:100vh;
`
const ContainerItens = styled.div`
margin-top:30px;
display:flex;
flex-direction:column;
align-items:center;
justify-items:center;
border:solid 1px white;
width: 100%;
height:  50%;
`
const BotaoBonitin = styled.button`
background-color: white;
color:#ffafcc;
font-weight:bold;
border:none;
padding:5px;
border-radius:6px;
margin-left:5px;
`
const Inputo =styled.input`
padding:5px;
border-radius:6px;
border:none;
margin-left:5px;

`
export class TelaInicial extends React.Component {
   
    render(){
        return(
            <Container>
            <BotaoBonitin onClick={this.props.goTelaDetalhes}>Trocar de Tela</BotaoBonitin>
            <ContainerItens>
            <p>Tela Inicial</p>
            <div>
                <Inputo name={'nome'} placeholder={'digite seu nome'} onChange={this.props.onChangeNome} value={this.props.inputNome}/>
                <Inputo name={'e-mail'} placeholder={'digite seu e-mail'} onChange={this.props.onChangeEmail} value={this.props.inputEmail}/>
                <BotaoBonitin onClick={this.props.createUser}>Criar Usuário</BotaoBonitin>
            </div>
            </ContainerItens>
           </Container>
        )
    }
}