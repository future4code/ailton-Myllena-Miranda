import React from "react";
import {TelaInicial} from "./components/TelaInicial"
import  {TelaDetalhes} from "./components/TelaDetalhes"
import axios from "axios";

class App extends React.Component{
  state = {
    tela: "telaInicial",
    user:[],
    inputNome: "",
    inputEmail:"",
  }

onChangeNome = (event) =>{
    this.setState({inputNome: event.target.value})
}
onChangeEmail = (event) =>{
    this.setState({inputEmail: event.target.value})
}

componentDidMount = () =>{
  this.getName()
};

getName = () =>{
  axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: 'myllena-miranda-ailton'
          }
        }
      )
      .then((response) => {
        this.setState({ user:response.data});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


createUser = () => {
    const body = {
        name: this.state.inputNome,
        email: this.state.inputEmail,
    };
axios
.post(
"https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
body,
{
 headers: {
    Authorization: 'myllena-miranda-ailton'
 }}).then((response) => {
window.alert("Usuário adicionado!");
})
.catch((error)=>{
  window.alert(error.message);
});
};

deletaUser =(id) =>{
  if(window.confirm("Você tem certeza?")){
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
      headers:{
        Authorization: 'myllena-miranda-ailton'
      }
    }
)
const novaLista = this.state.user.filter((item)=>{
  return item.id !== id
})
this.setState({user:novaLista})
  }
}

    goTelaDetalhes = () =>{
      this.setState({
        tela:"telaDetalhes"
      });
    };

    goTelaInicial = () =>{
      this.setState({
        tela:"telaInicial"
      })
    }
    escolheTela = () =>{
      switch (this.state.tela){
        case "telaInicial":
          return <TelaInicial onChangeEmail={this.onChangeEmail} 
          onChangeNome={this.onChangeNome} goTelaDetalhes={this.goTelaDetalhes}
           inputNome={this.state.inputNome} inputEmail={this.state.inputEmail} createUser={this.createUser}/>;
          break;
          case "telaDetalhes":
            return<TelaDetalhes goTelaInicial={this.goTelaInicial}
              objetos={this.state.user} deletaUser={this.deletaUser} getName={this.getName}/>;
            break;
      }
    }
 render(){

  return <div>{this.escolheTela()}</div>;
 }
};

export default App;
