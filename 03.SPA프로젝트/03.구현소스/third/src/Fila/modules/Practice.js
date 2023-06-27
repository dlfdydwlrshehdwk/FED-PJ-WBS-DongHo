import React, { useEffect, useState } from "react";
import '../css/practice.css'
import $ from 'jquery'
function Practice(props){

    let data = [
        {
            id : "1",
            isrc : "./images/bg/elements.jpg",
        },
        {
            id : "2",
            isrc : "./images/bg/woods.jpg"
        }
    ]

    const qwe = () => {
        $(()=>{

            function qwe(){
                
                let a = $('.pra_slideul li').eq(0)
                let b = $('.pra_slideul li').eq(1)
                // 최초시작은 무조건 b>a
                a.css({
                    zIndex : '0'
                })
                b.css({
                    zIndex:'0'
                })
            setTimeout(()=>{
                b.css({
                    // zIndex : 1,
                    transition : '1.5s',
                    top : '0%'
                })
            },3000)
            setTimeout(()=>{
                a.css({
                    transition :'none',
                    top : "100%",
                    zIndex:'1'
                })
            },4500)
            setTimeout(()=>{
                a.css({
                    transition : '1.5s',
                    top : '0%'
                })
            },7500)

            setTimeout(()=>{
                b.css({
                    transition : 'none',
                    top : '100%'
                })
                a.css({
                    zIndex : '0'
                })
            },9000)
        }

        // 싫애
        qwe()
        
        setInterval(()=>{
            qwe()
        },9000)
        })
    }

    const q = { top : '100%' }

    return(
        <> 
           <section className='pracetice_wrap'>
                <div className='pr_slidewrap'>
                    <ul className='pra_slideul'>
                        <li >
                            <img src={data[0].isrc}/>
                        </li>
                        <li style={q}>
                            <img src={data[1].isrc}/>
                        </li>
                    </ul>
                </div>
           </section>
           {qwe()}
        </>
    )
}
export default Practice;