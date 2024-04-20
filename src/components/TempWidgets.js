import React, { useState } from "react";

const TempWidgets = ({ widgets, doSomethingAfterClick }) => {
    const [clickedId, setClickedId] = useState(null);

    const handleClick = (event, id) => {
        setClickedId(id);
        doSomethingAfterClick(event);
    };

    return (
        <>
        {widgets.map((widgetRoom, i) => (
            <div
                key={i}
                onClick={(event) => handleClick(event, i)}
                className={i === clickedId ? "mainTempWidget active" : "mainTempWidget"}
            >
                <div>
                    <button>
                        <img src="/Images/Temperature-Icon.png"/>
                        <label>{`${widgetRoom}`}</label>
                    </button>
                </div>
            </div>
        ))}
        </>
    );
}; 

export default TempWidgets;