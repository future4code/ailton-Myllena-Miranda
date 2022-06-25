import React from "react";
import { ContainerMain } from "./styled";
import { BarraLateral } from "./BarraLateral";
import { Home } from "../../pages/Home";
import { LikedSongs } from "../../pages/LikedSongs";
import {Music} from "../../pages/Music";
import {Playlists} from "../../pages/Playlists";
import { ContainerTelin } from "./styled";

export class Main extends React.Component{
    state ={
        tela:"Home"
    }
    
    goTelaHome = () => {
        this.setState({
            tela: "Home"
        })}

        goTelaLikedSongs = () => {
            this.setState({
                tela:"LikedSongs"
            })}

            goTelaMusic = () =>{
                this.setState({
                    tela:"Music"
                })}

                goTelaPlaylist = () =>{
                    this.setState({
                        tela:"Playlist"
                    })}

               escolheTela = () =>{
                switch (this.state.tela){
                    case "Home":
                        return <Home/>;
                        break;
                        case "LikedSongs":
                        return <LikedSongs/>;
                        break;
                        case "Music":
                       return <Music/>;
                       break;
                       case "Playlist":
                        return <Playlists/>;
                        break;
                }}     

    render(){
        return(
         <ContainerMain>
            <BarraLateral goTelaHome={this.goTelaHome} goTelaLikedSongs={this.goTelaLikedSongs}
            goTelaMusic={this.goTelaMusic} goTelaPlaylist={this.goTelaPlaylist} />
           <ContainerTelin>{this.escolheTela()}</ContainerTelin>
         </ContainerMain>
        )
    }}