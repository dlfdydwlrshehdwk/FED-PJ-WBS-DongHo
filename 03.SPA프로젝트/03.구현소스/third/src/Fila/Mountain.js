import Potal from "./modules/Potal";
import Bgbx from "./modules/Bgbx";
import Mtext from "./modules/Mtext";
import FlowSpan from "./modules/FlowSpan";
import Mart from "./modules/Mart";
import Blackbx from "./modules/Blackbx";
import Nav from "./modules/Nav";

function Mountain(){
    return(
        <>  
            <Nav />
            <Bgbx sub="mountain" title="MOUNTAIN"/>
            <Mtext tit="mountain" />
            <FlowSpan />
            <FlowSpan />
            <Mart />
            <Blackbx />
            <Potal />
        </>
    )
}

export default Mountain;