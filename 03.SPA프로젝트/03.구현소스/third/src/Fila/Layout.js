import { Outlet } from "react-router-dom";
import $ from "jquery";
function jqFn(){
    $(()=>{

        console.log('하하하',$('body'))
        

    })
}


function Layout(){
    return(
        <>
            <Outlet />
            {jqFn()}
        </>
    )
}

export default Layout;