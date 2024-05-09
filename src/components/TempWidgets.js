import React, { useState, useEffect } from "react";
import TempSlider from "./Slider";
import "./temp-widgets.css";
import syncToApp from "../database/syncToApp";
import syncToDb from "../database/syncToDb";

const TempWidgets = ({ widgets, activeRoom, }) => {
    const [clickedId, setClickedId] = useState(widgets.findIndex(room => room === activeRoom));
    const [sliderValues, setSliderValues] = useState(Array.from({ length: widgets.length }, () => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            widgets.forEach(async (room, index) => {
                try {
                    const data = await syncToApp(room);
                    const value = data["roomTemp"];
                    setSliderValues(prevValues => {
                        const newSliderValues = [...prevValues];
                        newSliderValues[index] = value;
                        return newSliderValues;
                    });
                } catch (error) {
                    console.error("Error occurred while syncing data: ", error);
                }
            });
        }, 1000);
    
        return () => clearInterval(interval);
    }, [widgets, syncToApp]);


    const handleClick = (event, id) => {
        setClickedId(id);
    };

    const handleSliderChange = (newValue, id) => {
        const newSliderValues = [...sliderValues];
        newSliderValues[id] = newValue;
        setSliderValues(newSliderValues);
        syncToDb(id, {"roomTemp": newValue}, widgets);
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
