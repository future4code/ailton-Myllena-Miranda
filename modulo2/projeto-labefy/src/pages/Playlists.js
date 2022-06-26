import React from "react";
import axios from "axios";
import { apiLabefy } from "../constants/constants";

export class Playlists extends React.Component{
    state = {
        playlist:[],
    }
componentDidMount(){
    this.getPlaylists()
}
     getPlaylists = () =>{
        axios
        .get( "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers:{
                Authorization: "myllena-miranda-ailton"
            }
        }).then((response)=>{
            this.setState({playlist:response.data});

           
        }).catch((err)=>{
            console.log(err.response.data);
        });
    };

    render(){
        const renderiza = this.state.playlist.map((item)=>{
        return <div><p key={item.id}>{item.name}</p></div>
        })
        return(
            
            <div>
               {renderiza} 
            </div>
            
        )
    }

}