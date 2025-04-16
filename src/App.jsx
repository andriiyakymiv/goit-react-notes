import React from 'react';
import UseEffectHook from './components/useEffectHook/useEffectHook';
import ChangeHeading from './components/changeHeading/changeHeading';
import DisassemblyStage from './components/DisassemblyStage/DisassemblyStage';

const App = () => {
    return (
        <>
            <UseEffectHook />
            <hr />
            <ChangeHeading />
            <hr />
            <DisassemblyStage/>
            
        </>
    );
};

export default App;