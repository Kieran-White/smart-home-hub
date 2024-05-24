// YourReactComponent.js

import React from 'react';
import updateDocument from "./dbUpdate";
import setLED from "./setLED";

const syncToDb = async (id, dataKeyPair, widgets) => {
    const newRoom = widgets[id];
    const response = await updateDocument(newRoom, dataKeyPair);

    if (newRoom === "Living Room") {
        if ("isLightOn" in dataKeyPair) {
            if (!dataKeyPair.isLightOn) {
                setLED("#000000");
            }
        }
        if ("colour" in dataKeyPair) {
            setLED(dataKeyPair.colour);
        }
    }
}

export default syncToDb;
