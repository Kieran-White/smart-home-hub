
import localDB from './pouchdb';

const deleteDocument = async (docId) => {
  try {
    const doc = await localDB.get(docId);
    const response = await localDB.remove(doc);
    return response;
  } catch (error) {
    throw new Error('Error deleting document:', error);
  }
};

export default deleteDocument;
