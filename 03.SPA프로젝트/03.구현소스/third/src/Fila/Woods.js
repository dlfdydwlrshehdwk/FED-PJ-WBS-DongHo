import Bgbx from "./modules/Bgbx";
import Blackbx from "./modules/Blackbx";
import FlowSpan from "./modules/FlowSpan";
import Markbx from "./modules/Markbx";
import Mart from "./modules/Mart";
import Mtext from "./modules/Mtext";
import Nav from "./modules/Nav";
import Potal from "./modules/Potal";
import Tmarkbx from "./modules/Tmarkbx";

function Woods(){
    return(
        <>
            <Nav />
            <Bgbx sub="woods" title="WOODS"/>
            <Mtext tit="woods"/>
            <FlowSpan />
            <Tmarkbx tit="woods"/>
            <Markbx tit="woods" />
            <FlowSpan />
            <Mart />
            <Blackbx />
            <Potal />
        </>
    )
}

export default Woods;