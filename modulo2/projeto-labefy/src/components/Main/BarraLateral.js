import React from "react";
import { ContainerBarra } from "./styled";


export const BarraLateral = (props) =>{
    return <ContainerBarra>
    <button onClick={props.goTelaHome}>Home</button>
    <button onClick={props.goTelaLikedSongs}>Liked Songs</button>
    <button onClick={props.goTelaMusic}>Music</button>
    <button onClick={props.goTelaPlaylist}>Playlists</button>
    </ContainerBarra>
}