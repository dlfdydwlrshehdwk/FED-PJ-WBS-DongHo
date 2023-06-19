import "../css/flowspan.css";
import React from "react";
import $ from "jquery"


function FlowSpan(props) {


    function jqFn() {
        $(() => {
    
        $('.bt')
        .hover(
        function(){
           
            $(this).css({
                color : props.color,
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
                webkitTextStrokeColor : props.color,
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
    return (
        <>
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
            {jqFn()}
        </>
    );
}
export default FlowSpan;
