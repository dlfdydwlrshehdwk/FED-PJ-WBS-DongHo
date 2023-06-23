import Bgbx from "./modules/Bgbx";
import Blackbx from "./modules/Blackbx";
import ColorBx from "./modules/ColorBx";
import FlowSpan from "./modules/FlowSpan";
import Markbx from "./modules/Markbx";
import Mart from "./modules/Mart";
import Mtext from "./modules/Mtext";
import Nav from "./modules/Nav";
import Potal from "./modules/Potal";
import Tmarkbx from "./modules/Tmarkbx";
import { ParallaxProvider } from 'react-scroll-parallax';



function Woods(){
    return(
        <>
            <Nav />
            <Bgbx sub="woods" title="WOODS"/>
            <Mtext tit="woods"/>
            <FlowSpan color="#b23794" />
            <ColorBx tit="woods" num="one" bgc="#f4dfcd"/>
            <ParallaxProvider>
            <Tmarkbx tit="woods"/>
            </ParallaxProvider>
            <Markbx tit="woods" />
            <FlowSpan />
            <Mart color="#b23794"/>
            <Blackbx color1="#b23794" color2="#b23794"/>
            <Potal bbx="0" cursor="1" white="0"/>
        </>
    )
}

export default Woods;