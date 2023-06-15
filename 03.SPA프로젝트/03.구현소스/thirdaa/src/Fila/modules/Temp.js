import React from "react";
import $ from "jquery";
import "../css/temp.css";
function Temp(){

    // 제이쿼리 로드구역 함수 /////////
   
    function jqFn() {
        $(() => {
        }); //////// jQB ///////////
    } ////////////// jQFn ///////////

    return(
        <>
            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    )
}
export default Temp;