import updateDocument from "./dbUpdate";

const syncToDb = async (id, dataKeyPair, widgets) => {
    const newRoom = widgets[id];
    const response = await updateDocument(newRoom, dataKeyPair);

    console.log(response);
}

export default syncToDb;