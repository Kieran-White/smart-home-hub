import React, { useState, useEffect } from "react";
import ColourPicker from "./ColourPicker";
import "./light-widgets.css";
import updateDocument from "../database/dbUpdate";

const LightWidgets = ({ widgets, activeRoom, syncToApp }) => {
    const [clickedId, setClickedId] = useState(widgets.findIndex(room => room === activeRoom));
    const [colourValues, setColourValues] = useState(Array.from({ length: widgets.length }, () => "#F5F5F5"));
    const [turnedOnWidgets, setTurnedOnWidgets] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            widgets.forEach(async (room, index) => {
                try {
                    const data = await syncToApp(room);
                    console.log(data);
                    const value = data["colour"];
                    setColourValues(prevValues => {
                        const newColourValues = [...prevValues];
                        newColourValues[index] = value;
                        return newColourValues;
                    });
                    if (data["isLightOn"]) {
                        setTurnedOnWidgets(prevWidgets => [...prevWidgets, index]);
                    } else {
                        setTurnedOnWidgets(prevWidgets => prevWidgets.filter(item => item !== index));
                    }
                } catch (error) {
                    console.error("Error occurred while syncing data: ", error);
                }
            });
        }, 50000);
    
        return () => clearInterval(interval);
    }, [widgets, syncToApp]);

    const syncToDb = async (id, data) => {
        const newRoom = widgets[id];
        let dataToAdd = {};
        if (typeof data === "boolean") {
            dataToAdd = {"isLightOn": data};
        } else {
            dataToAdd = {"colour": data};
        }
        const response = await updateDocument(newRoom, dataToAdd);

        console.log(response);
    }
    

    const handleClick = (event, id) => {

        if (event.target.tagName === "INPUT") {
            return;
        }
        setClickedId(id);
        if (clickedId === id && event.currentTarget.classList.contains('active')) {
            if (turnedOnWidgets.includes(id)) {
                syncToDb(id, false);
                setTurnedOnWidgets(turnedOnWidgets.filter(item => item !== id));
            } else {
                syncToDb(id, true);
                setTurnedOnWidgets([...turnedOnWidgets, id]);
            }
        }
    };

    const handleColourChange = (event, id) => {
        const value = event.target.value;
        const newColourValues = [...colourValues];
        newColourValues[id] = value;
        setColourValues(newColourValues);
        syncToDb(id, value);
    };

    const getIconSource = (id) => {
        return turnedOnWidgets.includes(id) ? require(`../images/Lighting-Icon-On.png`) : require(`../images/Lighting-Icon-Off.png`);
    };

    return (
        <>
        {widgets.map((widgetRoom, i) => (
            <div
                key={i}
                onClick={(event) => handleClick(event, i)}
                className={`mainLightWidget
                    ${i === clickedId ? 'active' : ''}
                    ${widgetRoom === activeRoom ? 'activeRoom' : ''}
                    ${turnedOnWidgets.includes(i) ? 'turnedOn' : ''}
                    `}
                style={widgetRoom === activeRoom ? { gridArea: "middle" } : {}}
                >
                <div>
                    <button>
                        <img src={getIconSource(i)} alt="Lighting Icon"/>
                        <label>{`${widgetRoom}`}</label>
                    </button>
                </div>
                { i === clickedId && (
                    <>
                        {/* <canvas id="tempCanvas" width="300" height="300" style={{width:"150px", height:"150px"}}></canvas> */}
                        <ColourPicker value={colourValues[i]} onChange={(event) => handleColourChange(event, i)}/>
                    </>
                 )}
            </div>
        ))}
        </>
    );
}; 

export default LightWidgets;
