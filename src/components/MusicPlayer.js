import React from "react";

const MusicPlayer = () => {

    return (
        <div className="MusicContainer">
            <audio controls>
                <source src="/audio/groovy-ambient-funk.mp3" type="audio/mp3" />
                <source src="/audio/chill-upbeat-summer.mp3" type="audio/mp3" />
                <source src="/audio/titanium.mp3" type="audio/mp3" />            </audio>
        </div>
    );
};

export default MusicPlayer;