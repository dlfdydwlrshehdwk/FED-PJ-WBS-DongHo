import React from "react";
import $ from "jquery";
import "../css/nav.css";
import { Link } from "react-router-dom";

function Nav(){

    // 제이쿼리 로드구역 함수 /////////
   
    function jqFn() {
        $(() => {
        }); //////// jQB ///////////
    } ////////////// jQFn ///////////

    return(
        <>  
        <section className="nav">
        <div className="navtxt">
                <div>
                    <Link to='/mountain' >MOUNTAIN</Link>
                </div>
                <div>
                <Link to='/woods'>WOODS</Link>
                </div>
                <div>
                <Link to='/canyon'>CANYON</Link>
                </div>
                <div>
                <Link to='/elements'>ELEMENTS</Link>
                </div>
            </div>
        </section>
            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    )
}
export default Nav;