import './App.css';
import React from 'react';
import PageLayout from "./components/PageLayout";
import createRoomDocument from './database/dbCreate';
import readDocument from './database/dbRead';

function App() {

  React.useEffect(() => {
    const createDocumentsForAllRooms = async () => {
      const allRooms = ["Kitchen", "Dining Room", "Living Room", "Master Bedroom", "Bathroom"];
      for (const room of allRooms) {
        try {
          await createRoomDocument({
            "_id": room,
            "isLightOn": false,
            "colour": "#FFFFFF",
            "isTempOn": false,
            "roomTemp": 0,
            "isMusicOn": false,
            "musicVolume": 0
          });
        } catch (error) {
          console.error("Error creating room document for room", room, ":", error);
        }
      }
      console.log("All room documents created or already exist.");
    };
    createDocumentsForAllRooms()
  }, [])
  
  return (
    <div className="App">
      <PageLayout/>
    </div>
  );
}

export default App;
