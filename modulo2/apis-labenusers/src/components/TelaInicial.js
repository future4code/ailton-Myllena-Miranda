import React from "react";
import styled from "styled-components";


const Container = styled.div`
background-color: pink;
width: 100vw;
height:100vh;
`
export class TelaInicial extends React.Component {
   
    render(){
        return(
            <Container>
            <button onClick={this.props.goTelaDetalhes}>Trocar de Tela</button>
            <p>Tela Inicial</p>
            <div>
                <input name={'nome'} placeholder={'digite seu nome'} onChange={this.props.onChangeNome} value={this.props.inputNome}/>
                <input name={'e-mail'} placeholder={'digite seu e-mail'} onChange={this.props.onChangeEmail} value={this.props.inputEmail}/>
                <button onClick={this.props.createUser}>Criar Usuário</button>
            </div>
           </Container>
        )
    }
}