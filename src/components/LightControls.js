
import React from "react";
import LightWidgets from "./LightWidgets";
import "./light-controls.css";

const LightControls = ({rooms, activeRoom }) => {

    return (
        <div className="LightDashboard">
            <LightWidgets
                widgets={rooms}
                activeRoom={activeRoom}
            />
        </div>
    );
};

export default LightControls;