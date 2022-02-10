import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {};

function getRandomColor(color) {
    const COLOR_LIST = ['deeppink', 'green', 'red', 'black', 'blue'];
    let randomIndex = Math.floor(Math.random() * COLOR_LIST.length);
    while (COLOR_LIST[randomIndex] === color) {
        randomIndex = Math.floor(Math.random() * COLOR_LIST.length);
    }
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        const initialColor = localStorage.getItem('box_color') || 'deeppink';
        // console.log(initialColor);
        return initialColor;
    });

    const handleClick = () => {
        // get random color --> set color
        const newColor = getRandomColor(color);
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleClick}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;