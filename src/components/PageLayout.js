import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "./page-layout.css";
import HomeDashboard from "./HomeDashboard";
import TempControls from "./TempControls";
import FrontDoor from "./FrontDoor";
import MusicPlayer from "./MusicPlayer";

const PageLayout = () => {
    const [currentPage, setCurrentPage] = useState("HomeDashboard");
    const [currentTime, setCurrentTime] = useState("");
    const [activeRoom, setActiveRoom] = useState("Living Room");

    const updateTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const timeString = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
        setCurrentTime(timeString);
    };

    useEffect(() => {
        const timerID = setInterval(updateTime, 1000);
        return () => clearInterval(timerID);
    }, []);

    const navigateToRoom = (room) => {
        setActiveRoom(room);
        };

    const setPage = (pageName) => {
        setCurrentPage(pageName);
    };

    const renderPage = () => {
        switch (currentPage) {
            case "HomeDashboard":
                return <HomeDashboard setPage={setPage} />;
            case  "Temperature":
                return <TempControls />;
            case "FrontDoor":
                return <FrontDoor />;
            case "Music":
                return <MusicPlayer />;
            default:
                return <HomeDashboard setPage={setPage} />;
        }
    }

    return (
        <div className="page-layout">
            <header>
                <div></div>
                <span id="current-time">{currentTime}</span>
                <a id="home-button" href="">Home</a>
            </header>

            <section>
                <div className="room-nav">
                    <NavBar
                        buttons={["Kitchen", "Dining Room", "Living Room", "Master Bedroom", "Bathroom"]}
                        doSomethingAfterClick={navigateToRoom}
                        setActiveRoom={setActiveRoom}
                        activeRoom={activeRoom}
                    />
                </div>
                <div id="SectionContainer">
                    {renderPage()}
                </div>
            </section>

            <footer>
            © 2024 Home Dashboard
            </footer>

        </div>
    );
};

export default PageLayout;