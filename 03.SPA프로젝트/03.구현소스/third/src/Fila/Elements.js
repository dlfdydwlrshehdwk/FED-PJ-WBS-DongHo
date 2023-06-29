import Potal from "./modules/Potal";
import Bgbx from "./modules/Bgbx";
import Mtext from "./modules/Mtext";
import FlowSpan from "./modules/FlowSpan";
import Mart from "./modules/Mart";
import Blackbx from "./modules/Blackbx";
import Nav from "./modules/Nav";
import Markbx from "./modules/Markbx";
import Tmarkbx from "./modules/Tmarkbx";
import Item from "./modules/Item";
import ColorBx from "./modules/ColorBx";
import { ParallaxProvider } from "react-scroll-parallax";
function Elements(){
    
    return(
        <>
            <Nav by={[0,0,0,1]}/>

            <ParallaxProvider>
            <Bgbx sub="elements" title="ELEMENTS"/>
            </ParallaxProvider>

            <Mtext tit="elements"/>
            <FlowSpan  color="#a6e057"/>

            <ParallaxProvider>
            <Tmarkbx tit="elements"/>
            </ParallaxProvider>

            <Item />

            <ParallaxProvider>
            <ColorBx tit="elements" num="one" bgc="#c6d4e0"/>
            </ParallaxProvider>
            <ParallaxProvider>
            <Markbx tit="elements" />
            </ParallaxProvider>

            <ParallaxProvider>
            <ColorBx tit="elements" num="two" bgc="#c6d4e0"/>
            </ParallaxProvider>
            
            <FlowSpan  color="#a6e057"/>
            <Mart color="#a6e057"/>
            <Blackbx color1="#a6e057" color2="#b6d4dc"/>
            <Potal bbx="0" cursor="1" white="0" />
        </>
    )
}

export default Elements;