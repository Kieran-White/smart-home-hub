import React from "react";
import TempWidgets from "./TempWidgets";

const TempControls = () => {
    const printWidgetLabel = (event) => {
        console.log("Event happening: ", event);
        //do stuff here
    }
    return (
        <div className="TempDashboard">
            <TempWidgets
                widgets={["Kitchen", "DiningRoom"]}
                doSomethingAfterClick={printWidgetLabel}
            />
        </div>
    );
};

export default TempControls;