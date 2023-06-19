// 네가지 네브바 포탈.js

import "../css/potal.css"
import $ from 'jquery';
import { Link } from "react-router-dom";

function dom(){
    window.addEventListener('DOMContentLoaded',()=>{
    
        console.log('돔')

        const cursorRounded = document.querySelector('.rounded');
        const cursorPointed = document.querySelector('.pointed');
        
        
        const moveCursor = (e)=> {
          const mouseY = e.clientY;
          const mouseX = e.clientX;
           
          cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
          
          cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
         
        }
        
        
        window.addEventListener('mousemove', moveCursor);
    })
}


// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    let rounded = $('.rounded');
    let pointed = $('.pointed');

    const moveCursor = (e) =>{
        console.log('마우스')
        let mouseX = e.screenX;
        let mouseY = e.screenY;
        console.log(mouseX,mouseY)

        rounded.css({
            transform : `translate3d(${mouseX}px, ${mouseY}px, 0)`
        })
        pointed.css({
            transform : `translate3d(${mouseX}px, ${mouseY}px, 0)`
        })

    }

    $(window).on('mousemove',moveCursor);

















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
        <div className="cursor rounded">
            <img src="../images/mouse.png"/>
        </div>
        <div className="cursor pointed"></div>
        {jqFn()}
        {dom()}
        </>
    )
}

export default Potal;