import React, { useState } from 'react';

export default function ChangeColor() {
    const [color, setColor] = useState('rgb(255,255,255)');

    function handleClick() {
        
        function random() {
            return Math.floor(Math.random() * 256);
        }

        setColor(`rgb(${random()},${random()},${random()})`);
    }

    return(
        <div>
            <strong style={{backgroundColor:color}}>Currently Selected Color: {color}</strong>
            <button onClick={handleClick}>Change Color</button>
        </div>
    )
}