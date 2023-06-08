import { Outlet } from "react-router-dom";
import Potal from "./modules/Potal";


function Layout(){
    return(
        <>
            <Outlet />
        </>
    )
}

export default Layout;