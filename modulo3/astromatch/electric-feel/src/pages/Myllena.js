import React from "react";

export const Myllena = (props)=>{
    return(
        <div>
            <button onClick={()=>props.setPage("home")}>home</button>
            <button onClick={()=>props.setPage("matches")}>matches</button>
            <p>Minha page</p>
        </div>
    )
}