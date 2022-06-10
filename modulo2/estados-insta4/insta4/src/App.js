import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import atual from './img/atual.jpeg';
import kin from './img/kin-birthday.jpg'
import gostoso from './img/joohan.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
     infoUser : [
       {nomeUser:"paulinha", fotoUser: atual, Postin: kin},
       {nomeUser:"myllenam", fotoUser: atual, Postin:kin},
       {nomeUser: 'joohoneywalker', fotoUser:gostoso, Postin:gostoso}
     ],
      InputnomeUser:'',
     InputfotoUser:'',
     InputfotoPost:'',
    };
    
   adicionaPost =() => {
const novoPost ={
  nomeUser: this.state.InputnomeUser,
  fotoUser: this.state.InputfotoUser,
  Postin: this.state.InputfotoPost
};
 const postNovo = [...this.state.infoUser, novoPost];
 this.setState({infoUser:postNovo});
};
onChangeNomeUser = (event) =>{
  this.setState({nomeUser: event.target.value});
};
onChangeFotoUser = (event) =>{
  this.setState({fotoUser:event.target.value});
};
onChangeFotoPost =(event) => {
  this.setState({Postin: event.target.value});
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
         value = {this.state.InputnomeUser}
         onChange ={this.onChangeNomeUser}
         placeholder = {"Username"}
         />
         <input
         value={this.state.InputfotoUser}
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
