import { useEffect, useRef, useState } from 'react';

function randomColor(color) {
    const COLOR_LIST = ['deeppink', 'green', 'red', 'black', 'blue'];
    let randomIndex = Math.floor(Math.random() * COLOR_LIST.length);
    while (COLOR_LIST[randomIndex] === color) {
        randomIndex = Math.floor(Math.random() * COLOR_LIST.length);
    }
    return COLOR_LIST[randomIndex];
}

function useMagicColor(props) {

    const [color, setColor] = useState('black');
    const colorRef = useRef('black');

    // Change color every 1 second

    useEffect(() => {
        const colorInterval = setInterval(() => {
            console.log('Change color: ', colorRef.current);
            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;