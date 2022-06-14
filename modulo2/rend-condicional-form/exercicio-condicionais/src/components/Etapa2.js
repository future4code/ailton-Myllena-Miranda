import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

 export class Etapa2 extends React.Component {
    render(){
        return(
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <PerguntaAberta pergunta={"5. Qual curso você fez?"}/>
                <PerguntaAberta pergunta={"6. Em que unidade de ensino?"}/>
            </div>
        )
    }
}