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

function Mountain(){
    return(
        <>  
            <Nav />
            <Bgbx sub="mountain" title="MOUNTAIN"/>
            <Mtext tit="mountain" />
            <FlowSpan  color="#f79a26"/>
            <Item />
            <ColorBx tit="mountain" num="one" bgc="#eceaef"/>
            <Markbx tit="mountain"/>
            <Tmarkbx tit="mountain" />
            <FlowSpan  color="#f79a26"/>
            <Mart color="#f79a26"/>
            <Blackbx color1="#f79a26" color2="#e0d8f7"/>
            <Potal />
        </>
    )
}

export default Mountain;