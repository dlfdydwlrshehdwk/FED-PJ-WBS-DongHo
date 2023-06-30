import Potal from "./modules/Potal";
import Bgbx from "./modules/Bgbx";
import Mtext from "./modules/Mtext";
import FlowSpan from "./modules/FlowSpan";
import Mart from "./modules/Mart";
import Blackbx from "./modules/Blackbx";
import Nav from "./modules/Nav";
import Markbx from "./modules/Markbx";
import ColorBx from "./modules/ColorBx";
import Tmarkbx from "./modules/Tmarkbx";
import Item from "./modules/Item";
import { ParallaxProvider } from "react-scroll-parallax";

function Mountain(){
    return(
        <>  
            <Nav by={[1,0,0,0]}/>
            
            <ParallaxProvider>
            <Bgbx sub="mountain" title="MOUNTAIN"/>
            </ParallaxProvider>

            <Mtext tit="mountain" />
            <FlowSpan  color="#f79a26"/>
            <Item />

            <ParallaxProvider>
            <ColorBx tit="mountain" num="one" bgc="#eceaef"/>
            </ParallaxProvider>

            <ParallaxProvider>
            <Markbx tit="mountain"/>
            </ParallaxProvider>

            <ParallaxProvider>
            <Tmarkbx tit="mountain" />
            </ParallaxProvider>
            
            <FlowSpan  color="#f79a26"/>
            <Mart color="#f79a26"/>
            <Blackbx color1="#f79a26" color2="#e0d8f7"/>
            <Potal bbx="0" cursor="1" white="0"/>
        </> 
    )
}

export default Mountain;