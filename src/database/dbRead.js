import localDB from "./pouchdb";

const readDocument = async (docId) => {
    try {
        const doc = await localDB.get(docId);
        return doc;
    } catch (error) {
        throw new Error('Error reading document:', error);
    }
};

export default readDocument;