import React from 'react';
import Bgbx from "./modules/Bgbx";
import Blackbx from './modules/Blackbx';
import FlowSpan from './modules/FlowSpan';
import Markbx from './modules/Markbx';
import Mart from './modules/Mart';
import Mtext from './modules/Mtext';
import Nav from './modules/Nav';
import Potal from "./modules/Potal";
import Tmarkbx from './modules/Tmarkbx';

function Canyon(){
    return(
        <>
            <Nav />
            <Bgbx sub="canyon" title="CANYON"/>
            <Mtext tit="canyon"/>
            <FlowSpan color="red" />
            <Tmarkbx tit="canyon" />
            <Markbx tit="canyon"/>
            <FlowSpan color="red" />
            <Mart color="red"/>
            <Blackbx color1="red" color2="#efdece"/>
            <Potal bbx="0"/>
        </>
    )
}
export default Canyon;