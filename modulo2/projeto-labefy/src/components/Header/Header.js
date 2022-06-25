import React from "react";
import { ContainerHeader } from "./styled";

export class Header extends React.Component{
    render(){
        return(
            <ContainerHeader>
            <div>Oi,eu sou o header!</div>
            </ContainerHeader>
        )
    }
}