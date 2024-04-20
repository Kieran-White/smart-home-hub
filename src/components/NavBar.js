import React, { useState } from "react";
import "./nav-bar.css";

const NavBar = ({ buttons, setActiveRoom }) => {
    const [clickedId, setClickedId] = useState(-1);
    
    const handleClick = (event, id, room) => {
        console.log("Button clicked: ", room); //Remove after
        setClickedId(id);
        setActiveRoom(room);
    };

    return (
        <div id="room-buttons">
            {buttons.map((buttonLabel, i) => (
                <button
                    key={i}
                    name={buttonLabel}
                    onClick={(event) => handleClick(event, i, buttonLabel)}
                    className={i === clickedId ? "navButton active" : "navButton"}
                >
                    {buttonLabel}
                </button>
            ))}
        </div>
    );
};

export default NavBar;