import React, { useState, useEffect } from "react";
import "./nav-bar.css";

const NavBar = ({ buttons, setActiveRoom, activeRoom }) => {
    const [clickedId, setClickedId] = useState(-1);

    useEffect(() => {
        const initialActiveIndex = buttons.findIndex(button => button === activeRoom);
        setClickedId(initialActiveIndex);
    }, [activeRoom, buttons]);
    
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