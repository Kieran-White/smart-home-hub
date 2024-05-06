import React from "react";
import "./front-door.css"

const FrontDoor = () => {

    return (
        <>
        <div id="FrontDoorControl">
            <video></video>
            <button id="OpenDoor-Button">
                <img src={require(`../images/Door-Icon.png`)}/>
            </button>
        </div>
        </>
    );
};

export default FrontDoor;