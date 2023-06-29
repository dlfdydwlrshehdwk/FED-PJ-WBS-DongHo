import React, { useState } from "react";
import $ from "jquery";
import "../css/nav.css";
import { Link } from "react-router-dom";

function Nav(props){

    const [color , setColor] = useState(props.by)
    // 제이쿼리 로드구역 함수 /////////
    console.log('color',color)
    function jqFn() {
        $(() => {
        }); //////// jQB ///////////
    } ////////////// jQFn ///////////

    return(
        <>  
        <section className="nav">
        <div className="navtxt">
                <div>
                    {
                        color[0] == 1 ?
                        <Link to='/mountain' style={{color:"goldenrod"}}>MOUNTAIN</Link>
                        :
                        <Link to='/mountain' style={{color : "black"}}>MOUNTAIN</Link>
                    }
                </div>
                <div>
                    {
                        color[1] == 1 ?
                        <Link to='/woods' style={{color:"purple"}}>WOODS</Link>
                        :
                        <Link to='/woods' style={{color:"black"}}>WOODS</Link>
                    }
                </div>
                <div>
                    {
                        color[2] == 1?
                        <Link to='/canyon' style={{color:"red"}}>CANYON</Link>
                        :
                        <Link to='/canyon' style={{color:"black"}}>CANYON</Link>

                    }
                </div>
                <div>
                    {
                        color[3] == 1?
                        <Link to='/elements' style={{color:"#a6e057"}}>ELEMENTS</Link>
                        :
                        <Link to='/elements' style={{color:"black"}}>ELEMENTS</Link>
                    }
                </div>
            </div>
        </section>
            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    )
}
export default Nav;