import React from "react";
import styled from "styled-components";
import fundin from "../img/esqueciFilme.jpeg"
import axios from "axios";

const BotaoTela = styled.button`
background-color: #B07D95;
color:#152E2A;
font-weight:bold;
border:none;
padding:10px 15px;
border-radius:6px;
margin-left:5px;
`

const Container = styled.div`
background-image: url(${fundin});
width: 100vw;
height:100vh;
`
const Caixinha = styled.div`
width:50%;
height:100%;
background-color:#C7004C;
opacity:90%;
border-radius:16px;
margin-top:30px;
height:50%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const BotaoBonitin = styled.button`
background-color: #B07D95;
color:#152E2A;
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
const User = styled.div`
width:250px;
height:40px;
background-color:#C4C6B9;
margin-top:10px;
border-radius:5px;
`
const Estilo =styled.div`
 display:flex;
flex-direction:row;
justify-content:space-around; 
align-items:center;
padding:5px;
`
const Titulo = styled.h1`
border-bottom: solid 1px #3C968D;
color:#3C968D;
margin-bottom:15px;
`
const Procura = styled.div`
margin-top:20px;
`
const Titulo2 = styled.h3`
color:#DCA72D;
margin-bottom:5px;
font-size:18px;
margin-top:30px;
`

export class TelaDetalhes extends React.Component {
    state = {
        inputProcureNome: "",
    }

    onChangeProcureNome = (event) =>{
        this.setState({inputProcureNome: event.target.value})
    }
    

    render(){
        const mostraNomes= this.props.objetos.map((nome) =>{
            return <User> <Estilo><p  onClick={ this.props.showInfoUser(nome.id) ||this.props.goTelaUsuario} key={nome.id}> {nome.name}</p> <BotaoBonitin onClick={()=>{this.props.deletaUser(nome.id)}}>remover</BotaoBonitin> </Estilo></User>
          })
        return(
        
           <Container>
            <Cabecalho>
            <BotaoTela onClick={this.props.goTelaInicial}>Voltar</BotaoTela>
            <BotaoTela onClick={this.props.goTelaUsuario}>Info Usuários</BotaoTela>
            </Cabecalho>
            <Main>
            <Caixinha>
            <Titulo>Usuários</Titulo>
            <div><p>{mostraNomes}</p></div>
            <Procura>
                <Titulo2>
            <h3>Procurar Usuário</h3>
            </Titulo2>
            <Inputo name={'nome'} placeholder={'digite o nome'} onChange={this.onChangeProcureNome} value={this.state.inputProcureNome}/>
                <BotaoBonitin>Salvar edição</BotaoBonitin>
                </Procura>
                </Caixinha>
                </Main>
           </Container>
       
           
        )
    }
}