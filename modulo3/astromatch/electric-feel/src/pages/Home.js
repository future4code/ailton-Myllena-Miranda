import React from "react";


export const Home =(props)=>{

    return(
        <div>
            <p>Eu sou a home</p>
            <button onClick={()=>props.setPage("matches")}>Matches</button>
        </div>
    )

}