import React, { useState } from 'react';
import Slider from './Slider'
import Card from 'react-bootstrap/Card'


// Stores state

const Colorpicker = () => {
    const [red, updateRed] = useState("128")
    const [green, updateGreen] = useState("128")
    const [blue, updateBlue] = useState("128")

    return (
        <Card>
            <Card.Body>
            <Slider 
                label="R"
                val={red}
                updateColor={updateRed} 
            />
            <Slider 
                label="G"
                val={green}
                updateColor={updateGreen} 
            />
            <Slider 
                label="B"
                val={blue}
                updateColor={updateBlue} 
            />
            <div className = "color-preview" style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></div>
            </Card.Body>
        </Card>
    )
}


export default Colorpicker;