import React from "react";
import {Header} from "../../components/Header"
import { ContainerHome, MainHome,ContainerCardHome, } from "./styled";
import logo from "../../assets/Xmission.png"

export const HomePage =()=>{

    return(
        <ContainerHome>
            <Header/>
            <MainHome>
                <div>
                <img src={logo}/>
                </div>
                <h3>Destinos mais populares:</h3>
                <ContainerCardHome>
                    <p>Lua</p>
                    <p>Marte</p>
                    <p>Júpiter</p>
                    <p>Mais destinos</p>
                </ContainerCardHome>
            </MainHome>
        </ContainerHome>
    )

}