import React from "react";
import "./feature-widgets.css";


const FeatureWidgets = ({ widgets, onWidgetClick }) => {
    const handleWidgetClick = (widgetName) => {
        onWidgetClick (widgetName);
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
                            <img src={`./images/${widgetLabel}-Icon.png`} alt={`${widgetLabel} Icon`} />
                        </div>
                        <label>{widgetLabel}</label>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FeatureWidgets;