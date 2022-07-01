import React from "react";
import axios from "axios";
import { apiLabefy } from "../constants/constants";


export class Home extends React.Component{

    state={
        inputNomeUser:"",
        inputPlaylist:"",
        nomes:[],
        estadoBotao : false
    }
    

  


    createPlaylist = () =>{
        const body = {
            name: this.state.inputPlaylist
        };
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
         body, {
            headers:{
                Authorization: "myllena-miranda-ailton"
            }
        }).then((response) => {
            window.alert("Playlist adicionada");
            this.setState({inputPlaylist:""});
            
    })
    .catch((err)=>{
        window.alert(err.message);
    })
    }

  
    onChangePlaylist = (event) =>{
        this.setState({inputPlaylist: event.target.value})
    };

    pegaNome = (event) =>{
      const nomeDigitado = prompt("Qual é seu nome?")
       this.setState({inputNomeUser:nomeDigitado})
       this.setState({nomes: this.state.nomes.push(nomeDigitado)})
       console.log(this.state.nomes)
       
    };

    render(){
        const nome = this.state.inputNomeUser
    return(
            <div>
            <h1>{`Bem vinde, ${nome}!`}</h1>
        <button value="Quer mudar de nome?"
          onClick={this.pegaNome}> Qual o seu nome?</button>
          <div>
            <h2>Crie uma playlist</h2>
            <input name ={'playlist'} placeholder={"Digite o nome da playlist"} onChange={this.onChangePlaylist} value={this.state.inputPlaylist}/>
            <button onClick={this.createPlaylist}>Criar</button>
          </div>
            </div>
        )
    }
}