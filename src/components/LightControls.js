
import React from "react";
import LightWidgets from "./LightWidgets";
import "./light-controls.css";
import readDocument from "../database/dbRead";

const LightControls = ({rooms, activeRoom }) => {

    const syncToApp = async (roomName) => {
        try {
            const data = readDocument(roomName);
            return data;
        } catch (error) {
            console.error("Error occurred while reading document: ", error);
        }
    }

    return (
        <div className="LightDashboard">
            <LightWidgets
                widgets={rooms}
                activeRoom={activeRoom}
                syncToApp={syncToApp}
            />
        </div>
    );
};

export default LightControls;