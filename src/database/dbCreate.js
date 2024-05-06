import localDB from "./pouchdb";

const createDocument = async (data) => {
    try {
        const response = await localDB.put(data);
        return response;
    } catch (error) {
        throw new Error('Error creating document:', error);
    }
};

export default createDocument;