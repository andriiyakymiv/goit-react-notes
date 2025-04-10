import React from 'react';
import { useState } from "react";
import EventObject from './components/EventObject/EventObject';
import CustomButton from './components/CustomButton/CustomButton';
import Reactivity from './components/Reactivity/Reactivity';
import SeveralStates from './components/SeveralStates/SeveralStates';
import ClickCounter from './components/ClickCounter/ClickCounter';
import UpdatingObjects from './components/UpdatingObjects/UpdatingObjects';

const App = () => {

    const [clicks, setClicks] = useState(0);

    // Функція, яку будемо передавати в ClickCounter
    // для виклику під час кліку
    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <>
            <EventObject />
            <hr />
            <CustomButton message="Playing music!">
                Play some music
            </CustomButton>
            <CustomButton message="Uploading your data!">
                Upload data
            </CustomButton>
            <hr />
            <Reactivity />
            <hr />
            <SeveralStates />
            <hr />
            <ClickCounter value={clicks} onUpdate={handleClick} />
            <ClickCounter value={clicks} onUpdate={handleClick} />
            <hr />
            <UpdatingObjects />
            <hr />
            <hr />
        </>
    );
};

export default App;
