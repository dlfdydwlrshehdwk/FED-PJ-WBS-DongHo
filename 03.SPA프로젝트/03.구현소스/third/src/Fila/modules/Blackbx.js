import React from 'react';
import $ from 'jquery';
import "../css/blackbx.css"
import Potal from './Potal';

// 제이쿼리 로드구역 함수 /////////
   
function jqFn() {
    $(() => {
        console.log('안녕')
    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function Blackbx(){
    return(
        <>
        <section className='blackbx'>
        <div className="blackbx_flowbx1">
            <div className="blackbx_track">
                <div className="blackbx_content">
                    <span className="blackbx_wt">#FILAEXPLORE</span>
                    <span className="blackbx_bt">운동화는 휠라</span>
                    <span className="blackbx_wt">#FILAEXPLORE</span>
                    <span className="blackbx_bt">운동화는 휠라</span>
                </div>
            </div>
        </div>
        <div className="blackbx_flowbx2">
            <div className="blackbx_track">
                <div className="blackbx_content">
                    <span className="blackbx_bt">운동화는 휠라</span>
                    <span className="blackbx_wt">#FILAEXPLORE</span>
                    <span className="blackbx_bt">운동화는 휠라</span>
                    <span className="blackbx_wt">#FILAEXPLORE</span>
                </div>
            </div>
        </div>
        </section>
        {jqFn()}
        </>
    )
}

export default Blackbx;