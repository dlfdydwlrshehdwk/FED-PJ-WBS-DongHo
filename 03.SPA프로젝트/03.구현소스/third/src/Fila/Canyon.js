import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
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
            <Nav by={[0,0,1,0]}/>
            <ParallaxProvider>
            <Bgbx sub="canyon" title="CANYON"/>
            </ParallaxProvider>
            <Mtext tit="canyon"/>
            <FlowSpan color="red" />
            <ParallaxProvider>
            <Tmarkbx tit="canyon" />
            </ParallaxProvider>
            <ParallaxProvider>
            <Markbx tit="canyon"/>
            </ParallaxProvider>
            <FlowSpan color="red" />
            <Mart color="red"/>
            <Blackbx color1="red" color2="#efdece"/>
            <Potal bbx="0" cursor="1" white="0"/>
        </>
    )
}
export default Canyon;