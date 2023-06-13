import Potal from "./modules/Potal";
import Bgbx from "./modules/Bgbx";
import Mtext from "./modules/Mtext";
import FlowSpan from "./modules/FlowSpan";
import Mart from "./modules/Mart";
import Blackbx from "./modules/Blackbx";
import Nav from "./modules/Nav";

function Elements(){
    return(
        <>
            <Nav />
            <Bgbx sub="elements" title="ELEMENTS"/>
            <Mtext tit="elements"/>
            <FlowSpan />
            <FlowSpan />
            <Mart />
            <Blackbx />
            <Potal />
        </>
    )
}

export default Elements;