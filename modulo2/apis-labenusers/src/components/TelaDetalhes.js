import React from "react";
import styled from "styled-components";


const Container = styled.div`
background-color: pink;
width: 100vw;
height:100vh;
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
            return <p>{nome.name} <button onClick={()=>{this.props.deletaUser(nome.id)}}>delete</button> </p>
          })
        return(
           <Container>
            <button onClick={this.props.goTelaInicial}>Trocar de Tela</button>
            <p>Tela Detalhes</p>
            <div>{mostraNomes}</div>
            <h3>Procurar Usuário</h3>
            <div>
                <input name={'nome'} placeholder={'digite o nome'} onChange={this.onChangeProcureNome} value={this.state.inputProcureNome}/>
                <button>Salvar edição</button>
            </div>
           </Container>
        )
    }
}