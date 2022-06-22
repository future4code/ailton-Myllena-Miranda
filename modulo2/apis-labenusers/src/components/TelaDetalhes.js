import React from "react";
import styled from "styled-components";


const Container = styled.div`
background-color: pink;
width: 100vw;
height:100vh;
`
const Caixinha = styled.div`
width:100%;
margin-top:30px;
border:solid 1px white;
height:50%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
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

export class TelaDetalhes extends React.Component {
    state = {
        inputProcureNome: "",
    }

    onChangeProcureNome = (event) =>{
        this.setState({inputProcureNome: event.target.value})
    }
    
    render(){
        const mostraNomes= this.props.objetos.map((nome) =>{
            return <p>{nome.name} <BotaoBonitin onClick={()=>{this.props.deletaUser(nome.id)}}>delete</BotaoBonitin> </p>
          })
        return(
           <Container>
            <BotaoBonitin onClick={this.props.goTelaInicial}>Trocar de Tela</BotaoBonitin>
            <Caixinha>
            <p>Tela Detalhes</p>
            <div>{mostraNomes}</div>
            <h3>Procurar Usuário</h3>
            <div>
                <Inputo name={'nome'} placeholder={'digite o nome'} onChange={this.onChangeProcureNome} value={this.state.inputProcureNome}/>
                <BotaoBonitin>Salvar edição</BotaoBonitin>
                </div>
                </Caixinha>
            
           </Container>
        )
    }
}