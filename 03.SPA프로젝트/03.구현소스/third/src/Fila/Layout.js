import { Outlet } from "react-router-dom";
import $ from "jquery";
import React, { useState } from 'react';
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