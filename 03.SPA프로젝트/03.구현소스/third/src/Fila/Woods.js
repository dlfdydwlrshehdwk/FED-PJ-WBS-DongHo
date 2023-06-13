import Bgbx from "./modules/Bgbx";
import Blackbx from "./modules/Blackbx";
import FlowSpan from "./modules/FlowSpan";
import Mart from "./modules/Mart";
import Mtext from "./modules/Mtext";
import Nav from "./modules/Nav";
import Potal from "./modules/Potal";

function Woods(){
    return(
        <>
            <Nav />
            <Bgbx sub="woods" title="WOODS"/>
            <Mtext tit="woods"/>
            <FlowSpan />
            <FlowSpan />
            <Mart />
            <Blackbx />
            <Potal />
        </>
    )
}

export default Woods;