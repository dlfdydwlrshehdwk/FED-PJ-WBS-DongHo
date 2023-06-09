import Potal from "./modules/Potal";
import Bgbx from "./modules/Bgbx";
import Mtext from "./modules/Mtext";
import FlowSpan from "./modules/FlowSpan";
import Mart from "./modules/Mart";

function Mountain(){
    return(
        <>
            <Bgbx sub="mountain" title="MOUNTAIN"/>
            <Mtext tit="mountain" />
            <FlowSpan />
            <FlowSpan />
            <Mart />
            <Potal />
        </>
    )
}

export default Mountain;