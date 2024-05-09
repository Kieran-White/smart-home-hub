import React from "react";
import TempWidgets from "./TempWidgets";
import "./temp-controls.css";

const TempControls = ({rooms, activeRoom }) => {
    
    return (
        <div className="TempDashboard">
            <TempWidgets
                widgets={rooms}
                activeRoom={activeRoom}
            />
        </div>
    );
};

export default TempControls;