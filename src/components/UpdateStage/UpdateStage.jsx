import React from 'react';
import { useState, useEffect } from "react";


const UpdateStage = () => {
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
    console.log("Clicks updated: ", clicks);
    }, [clicks]);
    
    return (
        <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
    );
};

export default UpdateStage;