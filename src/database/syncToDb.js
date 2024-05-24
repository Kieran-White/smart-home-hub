import updateDocument from "./dbUpdate";
import SetLED from "../python/led_controller.py";

const syncToDb = async (id, dataKeyPair, widgets) => {
    const newRoom = widgets[id];
    const response = await updateDocument(newRoom, dataKeyPair);

    
    if (newRoom === "Living Room") {
        if ("isLightOn" in dataKeyPair) {
            if (!dataKeyPair[1]) {
                SetLED("#000000")
            }
        }
        if ("colour" in dataKeyPair) {
            SetLED(dataKeyPair[1])
        }
    }
}

export default syncToDb;