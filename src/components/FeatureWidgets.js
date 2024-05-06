import React from "react";
import "./feature-widgets.css";


const FeatureWidgets = ({ widgets, onWidgetClick }) => {
    const handleWidgetClick = (widgetName) => {
        onWidgetClick (widgetName);
    }

    const getImageSource = (widgetLabel) => {
        switch (widgetLabel) {
            case "Lighting":
                if (true) {
                    return require(`../images/Lighting-Icon-On.png`);
                } else {
                    return require(`../images/Lighting-Icon-Off.png`);
                }
            case "Security":
                if (true) {
                    return require(`../images/Security-Icon-Unlocked.png`);

                } else {
                    return require(`../images/Security-Icon-Locked.png`);
                }
            default:
                return require(`../images/${widgetLabel}-Icon.png`);
        }
    }

    return (
        <div id="GridContainer">
            <div className="all-controls">
                {widgets.map((widgetLabel, i) => (
                    <a
                    key={i}
                    id={widgetLabel}
                    className="widget"
                    onClick={() => handleWidgetClick(widgetLabel)}
                    >
                        <div className="icons">
                            <img src={getImageSource(widgetLabel)} alt={`${widgetLabel} Icon`} />
                        </div>
                        <label>{widgetLabel}</label>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FeatureWidgets;