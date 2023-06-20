import { Outlet } from "react-router-dom";
import $ from "jquery";
import React, { useState } from 'react';
function jqFn(){
    $(()=>{
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