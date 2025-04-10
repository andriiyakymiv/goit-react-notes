import { useState } from 'react';
import React from 'react';

const Reactivity = () => {
    
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };
    
    return (
        <button onClick={handleClick}>Current: {clicks}</button>
    );
};

export default Reactivity;