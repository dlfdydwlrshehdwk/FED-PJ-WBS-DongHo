import Potal from "./modules/Potal";
import Bgbx from "./modules/Bgbx";
import Mtext from "./modules/Mtext";
import FlowSpan from "./modules/FlowSpan";
import Mart from "./modules/Mart";

function Elements(){
    return(
        <>
            <Bgbx sub="elements" title="ELEMENTS"/>
            <Mtext tit="elements"/>
            <FlowSpan />
            <FlowSpan />
            <Mart />
            <Potal />
        </>
    )
}

export default Elements;