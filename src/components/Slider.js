
import ReactSlider from "react-slider"
import "./slider.css"

const TempSlider = ({ value, onChange }) => {
    const handleSliderChange = (newValue) => {
        onChange(newValue);
    };

    return (
        <>
            <label className="degreeLabel">{`${value}°C`}</label>
            <ReactSlider
                className="customSlider"
                trackClassName="customSlider-track"
                thumbClassName="customSlider-thumb"
                markClassName="customSlider-mark"
                marks={5}
                min={0}
                max={30}
                value={value}
                onChange={handleSliderChange}
            />
        </>
    );
};

export default TempSlider;