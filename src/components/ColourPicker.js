
import "./colour-picker.css"

const ColourPicker = ({value, onChange}) => {
    return (
        <div className="colourContainer">
            <input type="color"
            className="colourPicker"
            value={value}
            onChange={onChange}
            />
        </div>
    )
};

export default ColourPicker;