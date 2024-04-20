import React from "react";
import TempWidgets from "./TempWidgets";

const TempControls = ({rooms}) => {
    const printWidgetLabel = (event) => {
        console.log("Event happening: ", event);
        //do stuff here
    }
    return (
        <div className="TempDashboard">
            <TempWidgets
                widgets={rooms}
                doSomethingAfterClick={printWidgetLabel}
            />
        </div>
    );
};

export default TempControls;