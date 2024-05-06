import React from "react";
import TempWidgets from "./TempWidgets";
import "./temp-controls.css";

const TempControls = ({rooms, activeRoom }) => {
    const printWidgetLabel = (event) => {
        console.log("Event happening: ", event);
        //do stuff here
    }
    return (
        <div className="TempDashboard">
            <TempWidgets
                widgets={rooms}
                activeRoom={activeRoom}
                doSomethingAfterClick={printWidgetLabel}
            />
        </div>
    );
};

export default TempControls;