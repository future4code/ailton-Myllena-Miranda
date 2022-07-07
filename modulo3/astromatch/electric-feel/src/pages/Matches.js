import React from "react";

export const Matches = (props)=>{
    return(
        <div>
             <p onClick={()=> props.setPage("myllena")}>Vou colocar a minha foto aqui</p>
             <button onClick={()=>props.setPage("home")}>Home</button>
            <p>Eu sou a matches</p>
            
        </div>
    )
}