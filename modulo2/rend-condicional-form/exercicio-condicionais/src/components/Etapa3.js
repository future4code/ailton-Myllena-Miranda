import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

export class Etapa3 extends React.Component {
    render(){
        return(
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <PerguntaAberta pergunta={"8. Por que você não terminou um curso de graduação"}/>
                <PerguntaOpcoes
                pergunta={"7. Você fez algum curso complementar?"}
                opcoes={["Nenhum", "Curso técnico", "Curso de Inglês"]}
                />
            </div>
        )
    }
}