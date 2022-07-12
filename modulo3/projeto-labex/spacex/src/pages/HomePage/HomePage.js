import React from "react";
import {HeaderPublic} from "../../components/HeaderPublic";
import { ContainerHome, MainHome,ContainerCardHome, } from "./styled";
import logo from "../../assets/Xmission.png";
import {useNavigate} from "react-router-dom" ; 
import { goToApplicationFormPage, goToListTripPage } from "../../routes/coordinator";

export default function HomePage (){
const navigate = useNavigate()
    return(
        <ContainerHome>
            <HeaderPublic/>
            <MainHome>
                <div>
                <img src={logo}/>
                </div>
                <h3>Destinos mais populares:</h3>
                <ContainerCardHome>
                    <p onClick={()=>goToListTripPage(navigate)}>Lua</p>
                    <p onClick={()=>goToApplicationFormPage(navigate)}>Marte</p>
                    <p>Júpiter</p>
                    <p>Mais destinos</p>
                </ContainerCardHome>
            </MainHome>
        </ContainerHome>
    )

}