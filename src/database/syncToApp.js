
import readDocument from "./dbRead";

const syncToApp = async (roomName) => {
    try {
        const data = readDocument(roomName);
        return data;
    } catch (error) {
        console.error("Error occurred while reading document: ", error);
    }
}

export default syncToApp;