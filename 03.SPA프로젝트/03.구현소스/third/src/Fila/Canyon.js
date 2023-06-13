import React from 'react';
import Bgbx from "./modules/Bgbx";
import Blackbx from './modules/Blackbx';
import FlowSpan from './modules/FlowSpan';
import Mart from './modules/Mart';
import Mtext from './modules/Mtext';
import Nav from './modules/Nav';
import Potal from "./modules/Potal";

function Canyon(){
    return(
        <>
            <Nav />
            <Bgbx sub="canyon" title="CANYON"/>
            <Mtext tit="canyon"/>
            <FlowSpan />
            <FlowSpan />
            <Mart />
            <Blackbx />
            <Potal />
        </>
    )
}
export default Canyon;