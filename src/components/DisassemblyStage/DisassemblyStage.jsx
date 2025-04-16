import React from 'react';
import { useEffect } from "react";

const DisassemblyStage = () => {
    useEffect(() => {
        setInterval(() => {
            console.log(`Interval - ${Date.now()}`);
        }, 2000);
    }, []);
    return (
        <div>DisassemblyStage</div>
    );
};

export default DisassemblyStage;