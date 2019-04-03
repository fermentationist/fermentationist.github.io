import React from "react";
import IFrame from 'react-iframe';

const Frame = props => {
    return (
        <IFrame 
            url="https://fermentationist.github.io/ConsoleGame/"
            width="50vw"
            height="50vh"
            className="game-frame"
            >
            {props.children}
        </ IFrame>
    );
}

export default Frame;