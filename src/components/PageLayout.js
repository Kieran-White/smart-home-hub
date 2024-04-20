import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "./page-layout.css";

const PageLayout = ({page }) => {
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
                    />
                </div>
                <div id="SectionContainer">
                    {page}
                </div>
            </section>

            <footer>
            © 2024 Home Dashboard
            </footer>

        </div>
    );
};

export default PageLayout;