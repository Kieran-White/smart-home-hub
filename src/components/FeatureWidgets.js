import React, { useState } from "react";
import "./feature-widgets.css";


const FeatureWidgets = ({ widgets }) => {

    return (
        <div id="GridContainer">
            <div className="all-controls">
                {widgets.map((widgetLabel, i) => (
                    <a
                    key={i}
                    id={widgetLabel}
                    className="widget"
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