import React from 'react';
import Bgbx from "./modules/Bgbx";
import FlowSpan from './modules/FlowSpan';
import Mart from './modules/Mart';
import Mtext from './modules/Mtext';
import Potal from "./modules/Potal";

function Canyon(){
    return(
        <>
            <Bgbx sub="canyon" title="CANYON"/>
            <Mtext tit="canyon"/>
            <FlowSpan />
            <FlowSpan />
            <Mart />
            <Potal />
        </>
    )
}
export default Canyon;