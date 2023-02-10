import React from "react";

import loadingGif from "./gif/pikadance.gif"

const Loading = () => {


    return (
        <div>
            <h1 > Wait with Pikachu </h1>
            <img src={loadingGif} alt="waiting"/>
            
        </div>  
    )
}


export default Loading