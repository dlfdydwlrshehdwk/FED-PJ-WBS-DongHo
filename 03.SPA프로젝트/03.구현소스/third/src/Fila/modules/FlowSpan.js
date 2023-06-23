import "../css/flowspan.css";
import React, { useEffect } from "react";
import $ from "jquery"

function jqFn(pm) {
    $(() => {

    $('.bt')
    .hover(
    function(){
        $(this).css({
            color : pm,
            transition : '.4s '
        })
    },
    function(){
        $(this).css({
            color : 'black',
            transition : '.2s '
        })
    })

    
    $('.wt')
    .hover(
        function(){
            console.log('gd')
        $(this).css({
            webkitTextStrokeColor : pm,
            transition : '.4s '
        })
        },
        function(){
            $(this).css({
                webkitTextStrokeColor : 'black',
                transition : '.4s '
            })
        }
    )


    }); //////// jQB ///////////
} ////////////// jQFn ///////////


function FlowSpan(props) {

useEffect(()=>{
    setTimeout(()=>{
        jqFn(props.color)
    },10)
},[])

    return (
        <>
            <section className="flowwrap">
                <div className="animated-title">
                    <div className="track">
                        <div className="content">
                            <span className="wt">SHOP THE COLLECTION↗</span>
                            <span className="bt">SHOP THE COLLECTION↗</span>
                            <span className="wt">SHOP THE COLLECTION↗</span>
                            <span className="bt">SHOP THE COLLECTION↗</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* {
                setTimeout(()=>{
                    jqFn(props.color)
                },10)
            } */}
        </>
    );
}
export default FlowSpan;
