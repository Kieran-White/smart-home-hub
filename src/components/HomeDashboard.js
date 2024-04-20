import React from "react";
import FeatureWidgets from "./FeatureWidgets";

const HomeDashboard = () => {

    return (
        <>
        <div className="all-controls">
            <FeatureWidgets
                widgets={["Lighting", "Temperature", "TV", "Music", "Security", "FrontDoor"]}
            />
        </div>
        </>
    );
};

export default HomeDashboard;