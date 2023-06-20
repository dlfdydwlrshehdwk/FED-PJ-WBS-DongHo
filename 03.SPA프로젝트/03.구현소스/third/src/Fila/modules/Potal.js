// 네가지 네브바 포탈.js

import "../css/potal.css"
import $ from 'jquery';
import { Link } from "react-router-dom";



// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{
        const newCursor = document.querySelector('#cursor');
        let posX = 0;
        let posY = 0;
        $('body').on('mousemove',e=>{
            posX = e.pageX + "px";
            posY = e.pageY + "px";
            console.log(posX, posY);

            $('#cursor').css({
                left : posX,
                top : posY
            })
        })

















 // 줄위치 조정
 $('.ss').eq(0).css({
    left : '20%'
})
$('.ss').eq(1).css({
    left : '40%'
})
$('.ss').eq(2).css({
    left : '60%'
})
$('.ss').eq(3).css({
    left : '80%'
})
$('.gs').eq(0).css({
    top : "33.3%"
})
$('.gs').eq(1).css({
    top : "66.6%"
})


$('.ilgtxt div').eq(0).css({
    top : '12vw',
    left : '-11vw',
    transform: 'rotate(-90deg)'
})
$('.ilgtxt div').eq(1).css({
    top : '8vw',
    right : '-7vw',
    transform: 'rotate(90deg)'
})
$('.ilgtxt div').eq(2).css({
    bottom : '8vw',
    right : '-8vw',
    transform: 'rotate(90deg)'
})
$('.ilgtxt div').eq(3).css({
    bottom : '9vw',
    left : '-9vw',
    transform: 'rotate(-90deg)'
})
    }); // JQB // 
} // jqFn 함수 //


function Potal(){
    return(
        <>
        {/* 화면이 일그러져야 할 공간 */}
        <section className="ilg">
            {/* 세로로 4개있어야 할 글자들 */}
            <div className="ilgtxt">
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
            {/* 가로선 2개 */}
            <span className="gs"></span>
            <span className="gs"></span>
            {/* 세로선 4개 */}
            <span className="ss"></span>
            <span className="ss"></span>
            <span className="ss"></span>
            <span className="ss"></span>
            {/* 마우스커서svg */}
            <div></div>
            {/* 일그러지는 사진이 들어갈 공간 */}
            <div className="bgi">
                <div className="bgi1"></div>
                <div className="bgi2"></div>
            </div>
        </section>
        <div id="cursor"></div>
        {jqFn()}
        </>
    )
}

export default Potal;