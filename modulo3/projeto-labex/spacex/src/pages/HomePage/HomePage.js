import React from "react";
import {Header} from "../../components/Header"
import { ContainerHome, MainHome } from "./styled";

export const HomePage =()=>{

    return(
        <ContainerHome>
            <Header/>
            <MainHome>
                <h1>SpaceX</h1>
                <button>Viagens disponíveis</button>
                <h2>Viagens mais procuradas:</h2>
                <div>
                    <p>Lua</p>
                    <p>Marte</p>
                    <p>Júpiter</p>
                </div>
            </MainHome>
    
        </ContainerHome>
    )

}