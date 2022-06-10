import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import atual from './img/atual.jpeg';
import kin from './img/kin-birthday.jpg'
import gostoso from './img/joohan.jpg'
import may from './img/may.PNG'
import crush from './img/may-crush.jpg'
import nene from './img/nene.PNG'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
     infoUser: [
       {nomeUser:"useethefireflies", fotoUser: may, Postin: crush},
       {nomeUser:"myllenam", fotoUser: atual, Postin:kin},
       {nomeUser: 'joohoneywalker', fotoUser:gostoso, Postin:nene}
     ],
      InputNomeUser:'',
     InputFotoUser:'',
     InputFotoPost:'',
    };
    
   adicionaPost =() => {
const novoPost ={
  nomeUser: this.state.InputNomeUser,
  fotoUser: this.state.InputFotoUser,
  Postin: this.state.InputFotoPost,
};
 const postNovo = [...this.state.infoUser, novoPost];
 this.setState({infoUser: postNovo});
};
onChangeNomeUser = (event) =>{
  this.setState({InputNomeUser: event.target.value});
};
onChangeFotoUser = (event) =>{
  this.setState({InputFotoUser:event.target.value});
};
onChangeFotoPost =(event) => {
  this.setState({InputFotoPost: event.target.value});
};
     

  render() {
    const moreUsers = this.state.infoUser.map((item)=>{
      return(
        <Post nomeUsuario = {item.nomeUser} fotoUsuario = {item.fotoUser} fotoPost = {item.Postin} />
      );
    });
    return (
      <MainContainer>
         <header><h1> Myllena'Gram</h1></header>
         <h4>Creat a new post</h4>

         <input
         value = {this.state.InputNomeUser}
         onChange ={this.onChangeNomeUser}
         placeholder = {"Username"}
         />
         <input
         value={this.state.InputFotoUser}
         onChange ={this.onChangeFotoUser}
         placeholder = {"User pic"}
         />
         <input
         value={this.state.InputPostin}
         onChange= {this.onChangeFotoPost}
         placeholder = {"User post"}
         />
         <div> 
           <button onClick={this.adicionaPost}>Be cool</button>
         </div>

         {moreUsers}
      </MainContainer>
    );
  }
}

export default App;
