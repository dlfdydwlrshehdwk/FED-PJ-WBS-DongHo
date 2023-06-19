import React from 'react';
import $ from 'jquery';
import "../css/blackbx.css"
import Potal from './Potal';

// 제이쿼리 로드구역 함수 /////////
   
function jqFn() {
    $(() => {
    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function Blackbx(props){
    let color1 = { color : props.color1}
    let color2 ={ textShadow : `1px 1px 1px ${props.color2}` }
    return(
        <>
        <section className='blackbx'>
        <div className="blackbx_flowbx1">
            <div className="blackbx_track">
                <div className="blackbx_content">
                    <div className="blackbx_wt"  style={color2}
                    >#FILAEXPLORE</div>
                    <div className="blackbx_bt"  style={color1}>운동화는 휠라</div>
                    <div className="blackbx_wt"  style={color2}>#FILAEXPLORE</div>
                    <div className="blackbx_bt"  style={color1}>운동화는 휠라</div>
                </div>
                <div className="blackbx_content">
                    <div className="blackbx_wt" style={color2}>#FILAEXPLORE</div>
                    <div className="blackbx_bt" style={color1}>운동화는 휠라</div>
                    <div className="blackbx_wt" style={color2}>#FILAEXPLORE</div>
                    <div className="blackbx_bt" style={color1}>운동화는 휠라</div>
                </div>
            </div>
        </div>
        <div className="blackbx_flowbx2">
            <div className="blackbx_track">
                <div className="blackbx_content">
                    <div className="blackbx_bt" style={color1}>운동화는 휠라</div>
                    <div className="blackbx_wt"  style={color2}>#FILAEXPLORE</div>
                    <div className="blackbx_bt" style={color1}>운동화는 휠라</div>
                    <div className="blackbx_wt"  style={color2}>#FILAEXPLORE</div>
                </div>
                <div className="blackbx_content">
                    <div className="blackbx_bt" style={color1}>운동화는 휠라</div>
                    <div className="blackbx_wt"  style={color2}>#FILAEXPLORE</div>
                    <div className="blackbx_bt" style={color1}>운동화는 휠라</div>
                    <div className="blackbx_wt"  style={color2}>#FILAEXPLORE</div>
                </div>
            </div>
        </div>
        </section>
        {jqFn()}
        </>
    )
}

export default Blackbx;