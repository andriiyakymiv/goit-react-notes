import React from 'react';
import UseEffectHook from './components/useEffectHook/useEffectHook';
import ChangeHeading from './components/changeHeading/changeHeading';
import DisassemblyStage from './components/DisassemblyStage/DisassemblyStage';
import UpdateStage from './components/UpdateStage/UpdateStage';

const App = () => {
    return (
        <>
            <UseEffectHook />
            <hr />
            <ChangeHeading />
            <hr />
            <DisassemblyStage/>
            <hr />
            <UpdateStage/>
        </>
    );
};

export default App;