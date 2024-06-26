
import localDB from './pouchdb';

const updateDocument = async (docId, newData) => {
  try {
    const doc = await localDB.get(docId);
    const updatedDoc = { ...doc, ...newData };
    const response = await localDB.put(updatedDoc);
    return response;
  } catch (error) {
    console.error("Error updating Document: ", error.message);
    throw new Error('Error updating document:', error);
  }
};

export default updateDocument;
