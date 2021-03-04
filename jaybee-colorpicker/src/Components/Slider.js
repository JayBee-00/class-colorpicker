import React from 'react';

const Slider = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <input 
            label="red"
            type="range"
            min="0"
            max="255"
            value={props.val}
            onChange={(e) => props.updateColor (e.target.value)}
            />
            <br></br>

        </div>
    )
}

export default Slider;