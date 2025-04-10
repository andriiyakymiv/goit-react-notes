import React from 'react';

const EventObject = () => {
    const handleClick = (evt) => {
        console.log(evt);
    };
    return (
        <>
            <button onClick={handleClick}>First button</button>
            <button onClick={evt => console.log(evt)}>Second button</button>
        </>
    );
};

export default EventObject;