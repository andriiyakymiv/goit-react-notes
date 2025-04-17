import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import Modal from './Modal';

const DisassemblyStage = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    console.log("Effect");

    return () => {
      console.log("Clean up");
    };
  });
    
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close" : "Open"}
            </button>
            {isOpen && <Modal />}
        </div>
    );
};

export default DisassemblyStage;