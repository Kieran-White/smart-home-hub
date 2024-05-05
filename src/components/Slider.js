import ReactSlider from "react-slider"
import "./slider.css"

const Slider = () => {
    return (
        <ReactSlider
        className="customSlider"
        trackClassName="customSlider-track"
        thumbClassName="customSlider-thumb"
        markClassName="customSlider-mark"
        marks={3}
        min={0}
        max={45}
        />
    );
};

export default Slider;