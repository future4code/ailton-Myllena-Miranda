
import './App.css';
import styled from 'styled-components'
import logo from './img/LoveChat.png'
import React from 'react';

const MainContainer = styled.div`
width: 100vw;
height: 100vh;
background-color:pink;
display:flexbox;
justify-content:center;
`
const CaixinhaChat = styled.div`
width: 50vw;
background-color: white;
border: 1px solid grey;
grid-template-rows: 25vh 100% 20vh;
grid-template-columns: repeat(2, 1fr);
`
const Cabecalho = styled.header`
grid-column: 1/-1;
border-bottom: 1px solid grey;
background-color: #a62424;

`
const LogoImg = styled.img`
width: 17%;
height:100%
`
const Conversa = styled.main`
grid-column:1/-1;
`
const Informacoes = styled.footer`
position: absolute;
width: 50%;
height: 8%;
background-color:#a62424;
bottom:0;
`

const Chat = styled.div`
display: flexbox;
flex-direction: row;
justify-content: flex-start;
border-bottom: 1px solid pink;
margin-top:5px;
`
const Username = styled.p`
font-weight: bold;
margin-right: 17px;
color:#a62424;
`

const UserMessage = styled.p`
`

const NovoButtom = styled.button`
    background-color: pink;
    border: none;
    border-radius: 4px;
    color: white;
    margin-top: 8px;
    margin-left: 15px;
    padding: 8px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
`
const InputBonitin = styled.input`
border: 2px solid rgb(194, 148, 148);
    border-radius: 4px;
    margin-left: 15px;
    width: 35%;
    height: 45%;
`

class App extends React.Component {
  state = {
    mensagens:[],

    valorInputUser:"",
    valorInputText:"",
  };

  adicionaMensagem = () =>{
    const novaMensagem ={
      user: this.state.valorInputUser,
      text: this.state.valorInputText,
    }
     const chatBox = [...this.state.mensagens, novaMensagem];
     this.setState({mensagens: chatBox});
     this.setState({valorInputText:""});
     this.setState({valorInputUser:""});
  }

  onChangeInputUser = (event) => {
    this.setState({valorInputUser:event.target.value});
  };

  onChangeInputText = (event) => {
    this.setState({valorInputText:event.target.value});
  };

  render(){

    const listaDeMensagem = this.state.mensagens.map((item,index)=>{
      return(
       <Chat key={index}>
      <Username>{item.user}:</Username> 
       <UserMessage>{item.text}</UserMessage>
       </Chat>
      );
    });
  return (
 <MainContainer>
<CaixinhaChat>
  <Cabecalho><LogoImg src={logo}/></Cabecalho>
  
  <Conversa>
  {listaDeMensagem}
  </Conversa>

  <Informacoes>
  
  <InputBonitin
  value = {this.state.valorInputUser}
  onChange={this.onChangeInputUser}
  placeholder={"username"}
  />

  <InputBonitin
  value = {this.state.valorInputText}
  onChange={this.onChangeInputText}
  placeholder={"message"}
  />
  <NovoButtom onClick={this.adicionaMensagem}>Send message</NovoButtom>
  
  </Informacoes>
</CaixinhaChat>
 </MainContainer>
  );
  }
}

export default App;
