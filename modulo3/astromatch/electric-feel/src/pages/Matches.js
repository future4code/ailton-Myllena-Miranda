import React from "react";

export const Matches = (props)=>{
    return(
        <div>
            <p>Eu sou a matches</p>
            <button onClick={()=>props.setPage("home")}>Home</button>
        </div>
    )
}