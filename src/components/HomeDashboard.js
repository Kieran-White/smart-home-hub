import React from "react";
import FeatureWidgets from "./FeatureWidgets";

const HomeDashboard = ({ setPage }) => {

    const handleWidgetClick = (widgetName) => {
        setPage(widgetName);
    }

    return (
        <>
            <FeatureWidgets
                widgets={["Lighting", "Temperature", "TV", "Music", "Security", "FrontDoor"]}
                onWidgetClick={handleWidgetClick}
            />

        </>
    );
};

export default HomeDashboard;