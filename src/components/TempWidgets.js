import React, { useState } from "react";
import TempSlider from "./Slider";
import "./temp-widgets.css";

const TempWidgets = ({ widgets, activeRoom, doSomethingAfterClick }) => {
    const [clickedId, setClickedId] = useState(widgets.findIndex(room => room === activeRoom));
    const [sliderValues, setSliderValues] = useState(Array.from({ length: widgets.length }, () => 0));

    const handleClick = (event, id) => {
        setClickedId(id);
        doSomethingAfterClick(event);
    };

    const handleSliderChange = (newValue, id) => {
        const newSliderValues = [...sliderValues];
        newSliderValues[id] = newValue;
        setSliderValues(newSliderValues);
    };

    return (
        <>
        {widgets.map((widgetRoom, i) => {
            return (
            <div
                key={i}
                onClick={(event) => handleClick(event, i)}
                className={`mainTempWidget ${i === clickedId ? 'active' : ''} ${widgetRoom === activeRoom ? 'activeRoom' : ''}`}
                style={widgetRoom === activeRoom ? { gridArea: "middle" } : {}}
                >
                <div>
                    <button>
                        <img src={require("../images/Temperature-Icon.png")}/>
                        <label>{`${widgetRoom}`}</label>
                    </button>
                </div>
                { i === clickedId && (
                    <>
                        <TempSlider value={sliderValues[i]} onChange={(newValue) => handleSliderChange(newValue, i)} />
                    </>
                 )}
            </div>
            )
        })}
        </>
    );
}; 

export default TempWidgets;
