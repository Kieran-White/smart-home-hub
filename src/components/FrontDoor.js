import React from "react";
import "./front-door.css"

const FrontDoor = () => {

    return (
        <>
        <div className="frontDoorControl">
            <video></video>
            <button id="OpenDoor-Button">
                <img src="/Images/Door-Icon.png"/>
            </button>
        </div>
        </>
    );
};

export default FrontDoor;