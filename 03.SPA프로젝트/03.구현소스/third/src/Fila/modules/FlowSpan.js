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
                            <div className="wt">SHOP THE COLLECTION↗</div>
                            <div className="bt">SHOP THE COLLECTION↗</div>
                            <div className="wt">SHOP THE COLLECTION↗</div>
                            <div className="bt">SHOP THE COLLECTION↗</div>
                        </div>
                        <div className="content">
                            <div className="wt">SHOP THE COLLECTION↗</div>
                            <div className="bt">SHOP THE COLLECTION↗</div>
                            <div className="wt">SHOP THE COLLECTION↗</div>
                            <div className="bt">SHOP THE COLLECTION↗</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default FlowSpan;
