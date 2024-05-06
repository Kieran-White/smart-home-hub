
import React from "react";
import LightWidgets from "./LightWidgets";
import "./light-controls.css";

const LightControls = ({rooms, activeRoom }) => {
    const useLightSwitch = (event) => {
        const activeRoomData = rooms.find(room => room === activeRoom);
        if (activeRoomData.isTurnedOn) {
            console.log("lightOn");
        } else {
            console.log("LightOff");
        }
    }
    return (
        <div className="LightDashboard">
            <LightWidgets
                widgets={rooms}
                activeRoom={activeRoom}
                doSomethingAfterClick={useLightSwitch}
            />
        </div>
    );
};

export default LightControls;