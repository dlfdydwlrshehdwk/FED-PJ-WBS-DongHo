// 네가지 네브바 포탈.js

import "../css/potal.css"
import $ from 'jquery';
import { Link } from "react-router-dom";
import { useState } from "react";



// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{
        const newCursor = document.querySelector('#cursor');
        let posX = 0;
        let posY = 0;
        $('body').on('mousemove',e=>{
            posX = e.pageX;
            posY = e.pageY ;
            // console.log(posX, posY);

            $('#cursor').css({
                left : posX + 'px',
                top : posY + 'px'
            })

            // 칸 변수
            let sambunilw = $('.ilg').width()/3
            let sambunew = $('.ilg').width()/3 * 2
            let sambunsamw = $('.ilg').width() * 3
            let sambunilh = $('.ilg').height()/3
            let sambuneh = $('.ilg').height()/3 * 2
            let sambunsamh = $('.ilg').height()/3 * 3

            // 12시 칸 변수
            // .ilg에서 pageX가 ilg의 1/3보다 크고 2/3 과 같거나 작고
            // posY가 ilg에서 1/3일때
            let sambumew = $('.ilg').width()/2
            let sambumeh
            // console.log(sambunilw,sambunilh)

            // 광클방지
            let a = 0;
            // 한번만실행 키
            let b = 0;
            let bg1 = $('.bgi1');
            let bg2 = $('.bgi2');
            // 맨 윗층 3개
            // 11시
            if(posX <= sambunilw && posY <= sambunilh){
                console.log('마운틴')
                if(a == 11) return;
                a = 11;

                if(b==0){
                    bg1.css({
                        transition : '.4s',
                        backgroundImage : 'url(../images/bg/mountain.jpg)',
                        opacity : 1 ,
                    })
                    b=1;
                    console.log(b)
                }
                else{ // b가 1이라면{
                    
                }


            }
            // 12시
            else if(posX>=sambunilw && posX <= sambunew && posY <= sambunilh){
                console.log('12시')
                if(a == 12) return;
                a = 12;

                if(b==0){
                    bg1.css({
                        transition : '.4s',
                        backgroundImage : 'url(../images/bg/twelve.jpg)',
                        opacity : 1 ,
                    })
                    b=1;
                    console.log(b)
                }
            }
            // 1시
            else if(posX >= sambunew && posY <sambunilh){
                console.log('우즈')
                if(a == 3) return;
                a = 3;

                if(b==0){
                    bg1.css({
                        transition : '.4s',
                        backgroundImage : 'url(../images/bg/woods.jpg)',
                        opacity : 1 ,
                    })
                    b=1;
                    console.log(b)
                }
            }
            // 9시
            else if(posX <= sambunilw && posY >= sambunilh && posY <= sambuneh){
                console.log('9시')
                if(a == 9) return;
                a = 9;

                if(b==0){
                    bg1.css({
                        transition : '.4s',
                        backgroundImage : 'url(../images/bg/nine.jpg)',
                        opacity : 1 ,
                    })
                    b=1;
                    console.log(b)
                }
            }
            else if(posX >= sambunew && posY >= sambunilh && posY <= sambuneh){
                console.log('3시')
                if(a == 3) return;
                a = 3;

                if(b==0){
                    bg1.css({
                        transition : '.4s',
                        backgroundImage : 'url(../images/bg/three.jpg)',
                        opacity : 1 ,
                    })
                    b=1;
                    console.log(b)
                }
            }
            else if(posX <= sambunilw && posY >= sambuneh){
                console.log('엘레멘츠')
                if(a == 7) return;
                a = 7;

                if(b==0){
                    bg1.css({
                        transition : '.4s',
                        backgroundImage : 'url(../images/bg/elements.jpg)',
                        opacity : 1 ,
                    })
                    b=1;
                    console.log(b)
                }
            }
            else if(posX > sambunilw && posX < sambunew && posY >= sambuneh){
                console.log('6시')
                if(a == 6) return;
                a = 6;

                if(b==0){
                    bg1.css({
                        transition : '.4s',
                        backgroundImage : 'url(../images/bg/six.jpg)',
                        opacity : 1 ,
                    })
                    b=1;
                    console.log(b)
                }
            }
            else if(posX > sambunew && posY >= sambuneh){
                console.log('캐니언')
                if(a == 5) return;
                a = 5;

                if(b==0){
                    bg1.css({
                        transition : '.4s',
                        backgroundImage : 'url(../images/bg/canyon.jpg)',
                        opacity : 1 ,
                    })
                    b=1;
                    console.log(b)
                }
            }
            else{
                console.log('중앙')
                if(a == 13) return;
                a = 13;

                if(b==0){
                    bg1.css({
                        transition : '.4s',
                        backgroundImage : '',
                        opacity : 0 ,
                    })
                    b=1;
                    console.log(b)
                }
            }
        })

        // 새로고침시마다 적용이되는데
        // 안되게 하려면 쿠키를 줘야할까..?
        let qwer = 1
        function shoesOn(){
            if(qwer){
                $('.shoessvg').addClass('on')
            }
            else return;
            qwer = 0;
        }
        shoesOn()

        $('.blackbbx').css({
            position : 'fixed',
            top:0,
            left:0,
            right:0,
            bottom:0,
            backgroundColor : 'rgb(0 0 0 / 50%)',
            zIndex : 10
        })
        $('.bbx').css({
            position : 'absolute',
            top : '50%',
            left : '50%',
            transform : 'translate(-50%, -50%)',
            backgroundColor : 'white',
            border : '1px solid',
            borderRadius : '20px',
            width: '30%',
            height: '9%',
            textAlign: 'center',
        })

        $('.blackbbx, .bbx').on('click',function(){
            $('.blackbbx').css({
                display:'none'
            })
        })




 // 줄위치 조정
 $('.ss').eq(0).css({
    left : '33.3%'
})
$('.ss').eq(1).css({
    left : '66.6%'
})
$('.gs').eq(0).css({
    top : "33.3%"
})
$('.gs').eq(1).css({
    top : "66.6%"
})


// 각 글자 위치정정
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


function Potal(props){

    const [bbx,setBbx] = useState(0);
    const [cursor,setCursor] = useState(0);




    return(
        <>
        {
            setTimeout(()=>{
                setBbx(props.bbx)
            },4000)
        }
        {
            bbx == 1 ? 
        <div className="blackbbx">
            <div className="bbx">
                <h3>마우스를 각 구역으로 이동해보세요~. </h3>
            </div>
        </div> 
        : null
        }
        {/* 화면이 일그러져야 할 공간 */}
        <section className="ilg">
            {/* 신발인트로  */}
            <div className="shoessvg">
<svg id="_레이어_1" data-name="레이어 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338.57 374.85">
  <defs>
  </defs>
  <polygon className="cls-3" points="66.55 306.29 62.45 305.01 76.79 299.92 66.55 306.29"/>
  <path className="cls-5" d="m221.92,226.44c-9.9-4.29-25.74-7.58-39.7,5.49-18.91,17.72-42.09,69.93-50.08,86.96-5.99,2.59-11.7,6.26-17.42,10.28,1.7-9.19,4.63-26.32,3.41-29.19-1.69-3.95-5.65-10.16-12.71-3.95-7.06,6.21-46.02,20.05-53.36,19.48-7.34-.56-31.06-.56-37.84-2.54-5.7-1.66-8.59-1.74-9.04-4.4v-1.81s5.18-11.87,7.05-16.44c-.69,2.97-.8,8.27.57,10.79,1.69,3.11,16.38,3.39,31.91,4.24,15.53.85,9.04-1.98,38.4-9.6,29.36-7.62,62.4-53.93,92.33-83.29,23.08-22.64,54.89-22.96,68.24-21.91-7.64,8.95-14,17.79-17.13,26.15-1.21,3.23-2.8,6.51-4.63,9.75Z"/>
  <path className="cls-5" d="m182.22,231.94c13.96-13.08,29.8-9.79,39.7-5.49-8.4,14.88-21.94,28.97-28.12,33.92-7.53,6.02-34.26,49.32-57.22,56.85-1.5.49-2.97,1.06-4.43,1.69,7.99-17.03,31.16-69.24,50.08-86.96Z"/>
  <path className="cls-5" d="m26.65,265.58c3.01,16.13,12.8,15.87,42.78,12.1,29.98-3.76,61.5-48.56,72.05-73.04,10.54-24.47,46.31-60.61,55.34-63.62,4.35-1.45,25.72-7.61,46.73-13.61-19.6,25.72-47.85,45.82-47.48,51.25,0,0,0,3.7,1.33,6.16-12.63,5.96-23.33,12.15-29.28,18.03-23.44,23.15-58.16,72-88.38,81.6-22.93,7.29-42.76,11.96-54.45,6.39-3.71-1.77-6.61-4.56-8.51-8.65,2.54-4.17,9.88-16.62,9.88-16.62Z"/>
  <path className="cls-5" d="m274.3,157.43c.54-.63,1.08-1.26,1.6-1.89-.52.63-1.05,1.26-1.6,1.89Z"/>
  <path className="cls-5" d="m272.48,159.47c.59-.64,1.17-1.29,1.73-1.94-.57.65-1.14,1.3-1.73,1.94Z"/>
  <path className="cls-5" d="m274.22,157.52s.05-.06.08-.1c-.03.03-.05.06-.08.1Z"/>
  <path className="cls-5" d="m12.24,290.32l.57-1.63,3.95-6.49c1.91,4.08,4.8,6.88,8.51,8.65,11.69,5.57,31.52.9,54.45-6.39,30.21-9.6,64.94-58.45,88.38-81.6,5.95-5.88,16.65-12.07,29.28-18.03.61,1.13,1.51,2.01,2.81,2.12,3.26.3,49.27-16.46,68.66-23.59-8.37,8.91-17.43,18.1-25.17,27.18-13.35-1.04-45.16-.73-68.24,21.91-29.93,29.36-62.96,75.67-92.33,83.29-29.36,7.62-22.87,10.45-38.4,9.6-15.53-.85-30.21-1.13-31.91-4.24-1.37-2.52-1.26-7.82-.57-10.79Z"/>
  <path className="cls-5" d="m268.86,163.36c1.22-1.3,2.44-2.6,3.62-3.9,1.2-1.3,2.33-2.61,3.41-3.93,14.63-17.79,19.51-36.85,24.07-43.5,4.89-7.15,0-19.2,0-19.2,5.27,0,7.15,3.39,7.15,3.39l6.4,12.42s3.01,1.88,7.15,4.14c3.31,1.8,10.93,15.12,13.87,20.42,0,0-2.32,11.69-16.22,16.29-13.9,4.6-13.27,16.66-13.27,16.66,0,0-1.41,13.27-22.87,17.51-21.46,4.24-18.64,12.99-18.92,18.35-.17,3.25,6.29,7.64,11.41,10.59-4.04,1.14-14.81,4.52-20.26,9.36-5,4.44-9.38,18.29-11.33,25.27l-14.55,9.28-5.36,15.25s-24,9.88-25.13,12.42c-1.13,2.54-13.55,26.26-17.22,29.65-3.67,3.39-19.86,11.75-29.27,13.92-9.41,2.17-19.57,12.05-21.27,13.46s-26.26,18.64-36.99,20.05c-10.58,1.39-28.83,2.51-34.48.1-.08-.03-.17-.07-.24-.1-1.95-.92-5.98-3.07-10.48-5.46,6.23-.23,12.76-.74,19.24-1.69,11.65-1.71,21.57-7.01,30.82-13.18,5.7-3.8,11.15-7.93,16.59-11.75,5.72-4.02,11.43-7.69,17.42-10.28,1.46-.63,2.93-1.2,4.43-1.69,22.96-7.53,49.69-50.82,57.22-56.85,6.18-4.95,19.72-19.03,28.12-33.92,1.83-3.24,3.42-6.52,4.63-9.75.96-2.56,2.23-5.17,3.74-7.82,3.42-5.98,8.09-12.13,13.39-18.33,7.75-9.08,16.81-18.26,25.17-27.18Z"/>
  <path className="cls-5" d="m5.19,306.76c-.09.72-.08,1.3,0,1.81.44,2.67,3.34,2.74,9.04,4.4,6.78,1.98,30.49,1.98,37.84,2.54,7.34.56,46.31-13.27,53.36-19.48,7.06-6.21,11.01,0,12.71,3.95,1.23,2.87-1.7,20-3.41,29.19-5.44,3.82-10.89,7.95-16.59,11.75-9.25,6.16-19.17,11.47-30.82,13.18-6.48.95-13.01,1.46-19.24,1.69-7.91-4.2-17.29-9.14-19.45-9.5-3.39-.56-19.76-3.11-21.46-5.08-1.54-1.79-5.38-5.68-5.88-9.75,1.44-10.1,4.33-28.09,3.9-24.69Z"/>
  <path className="cls-7" d="m1.24,330.19c-.03.42,0,.84.05,1.26.49,4.08,4.34,7.96,5.88,9.75,1.69,1.98,18.07,4.52,21.46,5.08,2.16.36,11.53,5.3,19.45,9.5,4.51,2.39,8.54,4.54,10.48,5.46,5.36,2.54,24,1.41,34.73,0,10.73-1.41,35.29-18.64,36.99-20.05s11.86-11.29,21.27-13.46c9.41-2.17,25.6-10.54,29.27-13.92,3.67-3.39,16.09-27.11,17.22-29.65,1.13-2.54,25.13-12.42,25.13-12.42l5.36-15.25,14.55-9.28h0s.98,5.61.98,5.61c.51,2.92-7.62,16.38-7.62,16.38l-3.67,1.41-.56,2.26c-.56,8.09-25.41,32.75-25.41,32.75l-4.24.56-.56,4.59c-5.65,8.54-42.35,31.83-42.35,31.83l-5.08-.28-1.13,5.65c-7.06,7.06-48.28,20.33-48.28,20.33l-5.08-2.82-6.49,5.55c-49.98,8.94-65.51-2.45-81.6-8.28-16.09-5.83-10.45-37.09-10.73-32.57Z"/>
  <path className="cls-7" d="m282.18,183.65c21.46-4.24,22.87-17.51,22.87-17.51,0,0-.63-12.06,13.27-16.66,13.9-4.6,16.22-16.29,16.22-16.29,0,0,4.67.76,3.26,11.49-1.41,10.73-5.08,18.92-5.08,18.92l-6.78,3.11,1.98,2.82s-17.79,24.5-28.52,30.6l-2.26-1.52-1.13,1.52v3.56s-15.25,12.14-15.25,12.14c0,0-2.77-1.32-6.1-3.24-5.12-2.96-11.58-7.34-11.41-10.59.28-5.36-2.54-14.12,18.92-18.35Z"/>
  <path className="cls-5" d="m251.61,115.55c.47-.79.93-1.58,1.37-2.38-.45.8-.9,1.59-1.37,2.38Z"/>
  <path className="cls-5" d="m253.07,113.01c.46-.83.91-1.65,1.34-2.49-.43.83-.88,1.66-1.34,2.49Z"/>
  <g>
    <path className="cls-8" d="m211.88,151.3l.91,1.05c-.09-.02-.13-.12-.23-.16.06.09.12.15.16.22.43.83.51,1.69.18,2.59-.23.65-.68,1.13-1.19,1.56-1.54,1.32-3.06,2.66-4.62,3.96-.89.74-2.3.51-2.89-.48-.5-.84-.33-1.86.41-2.5.96-.83,1.91-1.65,2.87-2.48.09-.08.18-.16.26-.25.16-.18.12-.39-.09-.5-.09-.05-.2-.09-.3-.12-1.43-.48-2.86-.96-4.3-1.43-.37-.12-.74-.24-1.11-.36-.09-.03-.13-.01-.1.09,0,.03,0,.05.01.08.42,2.25.85,4.5,1.27,6.75.17.91.35,1.82.52,2.74.13.69-.04,1.31-.51,1.85-.17.2-.37.37-.58.54-1.91,1.64-3.79,3.31-5.73,4.92-1.02.85-2.16.97-3.37.46-.48-.2-.86-.54-1.19-.93-2.09-2.42-4.17-4.84-6.26-7.26-.13-.16-.28-.3-.4-.47-.4-.54-.59-1.13-.45-1.81.06-.31.2-.59.4-.86-.06.03-.1.04-.14.06.31-.26.61-.53.92-.79-.02.04-.05.08-.09.14.04-.02.06-.03.08-.04.52-.23,1.04-.27,1.58-.09.47.15.82.47,1.14.83,1.17,1.35,2.33,2.7,3.5,4.05.61.7,1.21,1.41,1.82,2.1.26.29.71.36,1.04.16.12-.07.23-.16.34-.25.94-.81,1.89-1.62,2.83-2.44.15-.13.31-.26.42-.43.19-.29.17-.6.11-.92-.54-2.85-1.08-5.7-1.62-8.55-.15-.78-.33-1.56-.43-2.35-.13-1.16.52-2.15,1.56-2.57.58-.24,1.17-.22,1.76-.02,1.19.39,2.37.79,3.56,1.18,1.24.41,2.47.82,3.71,1.23,1.05.35,2.09.71,3.14,1.03.35.11.68.25.97.47.05.03.09.07.16.13-.03-.07-.05-.11-.06-.15Z"/>
    <path className="cls-8" d="m181.7,161.76s-.03.06-.05.09c.03.03.05,0,.07-.01.88-.41,1.89-.2,2.53.52.42.48.84.96,1.25,1.45,2.1,2.44,4.21,4.88,6.31,7.32.49.56.72,1.2.55,1.95-.17.79-.64,1.34-1.42,1.58-.77.24-1.47.09-2.07-.44-.33-.29-.59-.65-.88-.99-2.28-2.64-4.55-5.28-6.83-7.92-.27-.31-.49-.63-.59-1.04-.14-.64-.05-1.23.35-1.77,0,0,0-.02,0-.03-.03,0-.06.01-.09.02.29-.25.57-.49.86-.74Z"/>
    <path className="cls-8" d="m177.62,173.18c.93-.8,1.85-1.6,2.78-2.4.48-.42,1.04-.62,1.68-.56,1.36.14,2.17,1.41,1.82,2.68-.12.44-.36.81-.71,1.11-1.34,1.15-2.68,2.31-4.02,3.47-.24.21-.4.46-.37.79.01.21.1.39.24.55.53.62,1.07,1.24,1.6,1.85.15.18.29.36.39.57.47.92.22,2.03-.6,2.67-.78.61-1.93.57-2.69-.1-.08-.07-.16-.15-.23-.24-1.02-1.18-2.03-2.36-3.05-3.54-1.04-1.21-.99-3.06.12-4.22.13-.14.27-.26.41-.39.88-.75,1.75-1.51,2.63-2.26Z"/>
    <path className="cls-1" d="m173.94,169.05c1.23-1.06,2.45-2.12,3.69-3.18.67-.57,1.65-.66,2.41-.22,1.26.72,1.44,2.46.36,3.44-1.3,1.17-2.64,2.29-3.96,3.44-1.06.92-2.12,1.83-3.18,2.74-.3.26-.63.49-1.02.6-.83.23-1.55.02-2.15-.57-.81-.81-.75-2.26.11-3.01,1.24-1.08,2.5-2.15,3.74-3.23,0,0,0,0,0,0Z"/>
  </g>
  <path className="cls-5" d="m125.28,74.31c-9.25,0-14.19.87-16.45.86-.25,0-.46-.04-.64-.11l-29.03,81.42s-35.01,84.49-35.01,86.75,1.41,10.73,3.92,12.42c2.5,1.69,9.64,2.26,14.39,1.98s14.45-7.91,24.62-18.07c10.16-10.16,30.78-73.69,35.22-87.53,4.44-13.84,21.53-41.51,30.57-59.2,1.47-2.88,3.04-5.34,4.67-7.45,0,0,0,0,0,0-4.37-1.97-23.9-11.06-32.25-11.06Z"/>
  <path className="cls-4" d="m191.3,100.64c-2.59,2.26-12.19,19.48-11.34,22.31.85,2.82,3.11,4.46,3.11,4.46l23.44-12.37s3.11-5.08,0-8.19c-3.11-3.11-12.62-8.47-15.2-6.21Z"/>
  <g>
    <path className="cls-8" d="m104.16,129.48c-.13-.14-.3-.24-.38-.42-.13-.3-.06-.71.13-1.16,1.04-2.44,2.08-4.93,3.15-7.45.51-1.19,1.47-1.78,2.04-1.24.28.26.28.73,0,1.38-.87,2.04-1.74,4.05-2.59,6.03q-.15.34.09.37c.73.09,1.47.18,2.2.28.14.02.24-.04.38-.19,1.62-1.72,3.26-3.46,4.93-5.21.46-.48.96-.94,1.46-1.35.64-.52.99-.47,1.18.08.21.59.22,1.33.24,2.04.05,1.63.05,3.27.12,4.86.03.75-.65,2.09-1.41,2.7-.29.23-.57.36-.82.33-1.14-.14-2.27-.28-3.4-.43-.47-.06-.63-.51-.44-1.16.18-.61.65-1.19,1.16-1.39.18-.07.37-.1.53-.08.6.06,1.18.14,1.77.21.06,0,.12.01.22.03-.05-1.17-.09-2.31-.14-3.48-.52.54-1.01,1.04-1.49,1.54-1.19,1.23-2.37,2.45-3.55,3.65-.33.34-.68.45-1.02.56-.02,0-.05.03-.08.04l-4.29-.54Z"/>
    <path className="cls-8" d="m101.19,129.11c-.05-.04-.11-.07-.16-.11-.31-.24-.36-.64-.15-1.21.11-.29.23-.58.35-.87.92-2.23,1.85-4.49,2.8-6.79.23-.55.51-1.03.99-1.29.49-.26.87-.22,1.12.11.24.31.15.79-.07,1.33-1.08,2.57-2.14,5.1-3.18,7.59-.32.77-.76,1.17-1.37,1.25-.02,0-.04.02-.06.03l-.28-.04Z"/>
    <path className="cls-8" d="m96.63,124.62c-.29.73-.57,1.44-.85,2.14-.06.16-.13.31-.21.46-.24.48-.58.78-.96.88-.8.23-1.24-.41-.83-1.44.48-1.19.93-2.39,1.41-3.6.3-.77.97-1.32,1.51-1.26,1.56.19,3.13.38,4.7.57.44.05.62.52.47,1.15-.15.62-.62,1.25-1.1,1.45-.18.08-.38.1-.54.08-1.12-.13-2.24-.27-3.35-.41l-.26-.03Z"/>
    <path className="cls-1" d="m99.42,121.04c-.76-.09-1.52-.18-2.27-.28-.53-.07-.72-.46-.58-1.15.17-.84.86-1.59,1.48-1.61.08,0,.16,0,.24.01,1.51.18,3.03.36,4.55.54.57.07.76.45.6,1.14-.2.89-.91,1.66-1.55,1.62-.78-.05-1.54-.17-2.31-.26-.05,0-.11-.01-.16-.02Z"/>
    <path className="cls-8" d="m118.29,96.18c2.01.21,4.04.38,6.04.63,1.57.2,1.79,2.5.52,4.8-.9,1.65-2.5,2.97-3.71,3.06-.21.02-.42.01-.62,0-2.6-.28-5.19-.56-7.78-.84-.64-.07-.97.22-1.38,1.19-.71,1.69-1.42,3.37-2.09,5.03-1.06,2.65-3.56,4.26-4.93,3.21-.83-.64-.97-2.03-.32-3.66,1.33-3.35,2.69-6.77,4.1-10.26.91-2.25,2.72-3.88,4.23-3.76,1.99.16,3.95.4,5.93.6,0,0,0,0,0,0Z"/>
    <path className="cls-1" d="m119.08,95.27c-2.26-.23-4.5-.46-6.75-.69-1.41-.15-1.97-1.73-1.32-3.89.6-1.97,2.03-3.7,3.56-4.34.48-.2.91-.24,1.33-.19,4.56.45,9.16.89,13.78,1.33.96.09,1.51.73,1.59,1.94.13,1.86-1.32,4.53-3.1,5.79-.82.58-1.56.83-2.24.76-2.29-.24-4.57-.47-6.85-.7Z"/>
    <path className="cls-8" d="m112.01,79.69c-5.04,12.99-9.73,25.07-14.11,36.34.75.09,1.5.18,2.25.27,6.97.82,14,1.65,21.1,2.48l.21.02c5.29-11.37,10.95-23.55,17.05-36.66-8.93-.83-17.77-1.64-26.5-2.45Zm8.91,36.91c-7-.81-13.93-1.62-20.81-2.42,3.91-9.96,8.08-20.55,12.52-31.85,7.6.72,15.28,1.44,23.06,2.17-5.24,11.39-10.15,22.05-14.77,32.1Z"/>
  </g>
  <path className="cls-5" d="m158.98,83.61c-.04.05-.09.1-.13.15.04-.05.09-.1.13-.15Z"/>
  <path className="cls-5" d="m167.42,73.58c-.87-.96-2.84-2.47-7.26-4.27-2.2-.89-6.48-2.15-11.51-3.37-.51.87-.99,2.03-.77,3.16.42,2.19,1.98,10.24,7.98,11.72,1.98.49,3.4.96,4.44,1.37,0,0,0,0,0,0,2.06-2.13,4.18-3.81,6.29-5.14.12-.07.23-.15.35-.22.42-.26.74-.66.88-1.13l.06-.2c.2-.68.03-1.4-.44-1.92Z"/>
  <path className="cls-5" d="m160.28,82.19c-.44.45-.87.93-1.3,1.43.43-.5.86-.97,1.3-1.43Z"/>
  <path className="cls-5" d="m158.84,83.77c-.44.51-.88,1.05-1.31,1.61.43-.56.87-1.09,1.31-1.61Z"/>
  <path className="cls-5" d="m130.6,60l3.29-9.71c.05-.13.1-.26.17-.38.78-1.37,5.8-9.98,8.46-9.79,2.33.16,2.8,2.44,2.89,3.33.02.2.01.4-.02.6l-.35,2.08c-.05.32-.18.63-.37.9l-9.45,13.59c.38.06.75.12,1.14.19,2.13-2.91,6.45-8.82,8.6-11.94,2.92-4.24,3.2-10.82-9.51-14.02-10.61-2.67-15.38,17.83-16.66,24.66-.03.16-.04.32-.03.48.47-.13.93-.21,1.36-.21,1.54,0,5.24-.27,10.47.23Z"/>
  <path className="cls-4" d="m135.24,60.61l9.45-13.59c.19-.27.31-.58.37-.9l.35-2.08c.03-.2.04-.4.02-.6-.1-.88-.57-3.17-2.89-3.33-2.66-.18-7.68,8.43-8.46,9.79-.07.12-.12.25-.17.38l-3.29,9.71c1.43.14,2.99.34,4.64.61Z"/>
  <path className="cls-5" d="m155.85,80.81c-6-1.48-7.55-9.53-7.98-11.72-.22-1.13.26-2.3.77-3.16.48-.81.99-1.35.99-1.35-4.86-1.88-9.32-3.05-13.26-3.77-.39-.07-.76-.13-1.14-.19-1.65-.27-3.21-.47-4.64-.61-5.23-.5-8.93-.23-10.47-.23-.43,0-.89.08-1.36.21-2.8.77-6.01,3.5-7.46,4.17-.63.29-1.35,1.48-2.02,2.86-1.13,2.35-2.08,5.26-2.08,5.26,0,0-.5,2.28.98,2.8.18.06.39.11.64.11,2.26.01,7.2-.86,16.45-.86,8.35,0,27.88,9.09,32.25,11.06,0,0,0,0,0,0,.43-.56.87-1.1,1.31-1.61.04-.05.09-.1.13-.15.43-.5.86-.97,1.3-1.43,0,0,0,0,0,0-1.03-.41-2.46-.89-4.44-1.37Z"/>
  <path className="cls-2" d="m234.77,18.3c.91-.34,1.68-.56,2.23-.67,0,0-.95.18-2.43.46l.2.21h0Z"/>
  <path className="cls-5" d="m234.13,17.63s-8.38-10.07-5.93-13.08c1.31-1.61,3.02-2.97,5.09-2.71,0,0,0-.03,0-.03l-11.2-1.3s-4.52.09-4.33,6.59c.19,6.49,10,11.85,10,11.85l.79.23c2.3-.4,4.46-.79,6.03-1.08l-.44-.46Z"/>
  <path className="cls-4" d="m223.45,30.38c-.9-4.49,3.54-8.2,7.73-10.45.64-.34,1.27-.65,1.87-.92,0,0,0,0,0,0,.6-.27,1.18-.51,1.72-.71h0s-.2-.21-.2-.21c-1.56.29-3.73.68-6.03,1.08-4.54.78-9.6,1.57-11.59,1.57-3.95,0-16.94-1.55-16.94-1.55,0,0-12.99-.99-14.12,8.89s-.28,28.52-3.11,32.47c-2.82,3.95-9.6,10.73-14.68,14.12l-.53,1.77c5.48-3.2,10.84-4.27,14.93-5.44,7.91-2.26,7.06,5.08,29.65,9.04,22.59,3.95,23.72-8.19,24.85-13.27s-12.14-29.36-13.55-36.38Z"/>
  <path className="cls-5" d="m234.77,18.3c-.53.2-1.11.43-1.72.71.6-.27,1.18-.51,1.72-.71Z"/>
  <path className="cls-4" d="m228.2,4.55c-2.45,3.01,5.93,13.08,5.93,13.08l.64.67c.9-.34,1.68-.56,2.23-.67,1.81-.34,8.82,7.25,14.83,14.24-2.96-6.56-8.74-19.06-12.34-24.68-2.32-3.64-4.4-5.11-6.21-5.34-2.07-.27-3.78,1.1-5.09,2.71Z"/>
  <path className="cls-5" d="m261.23,43.28l-.04-.14s-4.33-5.42-9.36-11.27c-6.01-6.99-13.02-14.58-14.83-14.24-.55.1-1.33.33-2.23.67-1.07.4-2.32.95-3.59,1.63-4.19,2.25-8.63,5.96-7.73,10.45,1.41,7.02,14.68,31.3,13.55,36.38s-2.26,17.22-24.85,13.27c-22.59-3.95-21.74-11.29-29.65-9.04-4.08,1.17-9.45,2.24-14.93,5.44-.34.2-.67.4-1.01.61-2.11,1.33-4.23,3-6.29,5.14-.93.96-1.85,2.03-2.75,3.19-1.63,2.11-3.2,4.57-4.67,7.45-9.04,17.69-26.13,45.36-30.57,59.2-4.44,13.84-25.06,77.36-35.22,87.53-10.16,10.16-19.87,17.79-24.62,18.07s-11.88-.28-14.39-1.98c-2.5-1.69-3.92-10.16-3.92-12.42s35.01-86.75,35.01-86.75l29.03-81.42c-1.48-.52-.98-2.8-.98-2.8,0,0,.95-2.91,2.08-5.26-4.19,1.79-13.49,6.55-15.44,14.15-2.54,9.88-5.36,22.59-7.06,24s-7.58,14.01-10,22.25c-2.4,8.16-16.64,45.3-16.93,46.07,0,.01,0,.02-.01.03l-10.61,34.99-12.8,38.72s-3.01,10.5-2.26,15.39,4.52,8.66,30.87,5.27c26.35-3.39,38.02-25.6,42.54-29.36,4.48-3.73,25.96-42.96,26.35-43.66,0-.01,0-.01.02-.03l21.81-34.6s.02-.03.03-.04c.69-.9,26.01-33.9,56.83-36.88,17.55-1.69,32.49-8.37,42.21-13.9.11-.06.2-.16.25-.27,15.75-31.86,6.81-63.62,6.14-65.88Zm-90.26,53.38c-1.18-3.78.57-7.69,3.92-8.74,3.34-1.05,7.01,1.17,8.19,4.95,1.18,3.78-.57,7.69-3.92,8.74-3.34,1.05-7.01-1.17-8.19-4.95Zm35.62,18.23c-.06.1-.14.18-.25.24l-22.92,12.09c-.22.12-.49.09-.68-.07-.66-.57-2.13-2.04-2.78-4.2-.85-2.82,8.75-20.05,11.34-22.31,2.59-2.26,12.1,3.11,15.2,6.21,2.78,2.78.58,7.16.09,8.03Z"/>
  <ellipse className="cls-4" cx="177.03" cy="94.77" rx="3.96" ry="4.47" transform="translate(-20.21 57.12) rotate(-17.35)"/>
  <path className="cls-6" d="m44.15,243.23s-2.61,15.4,3.92,16.47,20.52,3.07,24.52-.93,19-11,28-33,29-71,29-71l21-40s11.92-27.75,23.46-31.87c11.54-4.13,8.59-7.3,24.56-.71,15.97,6.59,34.97,2.59,36.97.59s14-7,12-18c-2-11-12-34-12-39s1-5,1-5"/>
  <path className="cls-5" d="m86.59,117.77c.22,2.42,1.91,3.37,4.5,3.37,2.26,0,4.72-2.07,4.5-4.5-.53-5.79-6.26-9.4-11.52-10.61-2.37-.54-4.87.73-5.54,3.14-.62,2.27.76,4.99,3.14,5.54h0c1.41.32,2.18.59,3.36,1.3.07.04.14.08.2.12.62.38,1.09.95,1.36,1.63h0Z"/>
  <path className="cls-5" d="m75.92,137.79c2.6-3.84,9.75,10.43,10.43,11.43,2.67,3.9,6.79,5.63,11.25,6.67,5.52,1.28,11.5,1.63,16.85,3.54,3.54,1.26,4.04,3.25,4.05,6.77,0,2.55.11,6.15-2.52,7.52-4.77,2.49-13.2.83-18.28.18-5.58-.71-11.14-1.75-16.77-2-10-.44-19.92,1.59-27.51,8.43-4.31,3.88,2.07,10.23,6.36,6.36,11.71-10.55,29.71-4.2,43.49-3.22,6.11.43,14.64.82,19.59-3.55,4.59-4.06,5.14-11.33,4.54-17.06-.67-6.33-4.68-10.2-10.56-12.12-3.75-1.23-7.8-1.74-11.66-2.5-3.01-.59-6.83-.79-9.53-2.4-3.02-1.81-3.72-6.02-5.59-8.8-1.5-2.23-3.41-4.21-5.64-5.72-5.51-3.73-12.31-3.94-16.28,1.92-3.25,4.81,4.54,9.32,7.77,4.54h0Z"/>
  <path className="cls-5" d="m135.55,127.35c.21-1.34,1.01-1.99,2.39-1.96,1.49.37,2.08,1.26,1.78,2.66.27,1.64-.61,4.1-1.18,5.62-1.42,3.8-3.68,6.23-7.84,6.72-7.55.88-14.45-2.33-21.8,1.09-5.38,2.51-10.63,10.08-17.05,8.22-7.62-2.21-13-10.39-21.49-9.51-5.71.59-5.77,9.59,0,9,3.48-.36,6.04,2.18,8.82,3.94s5.78,3.48,8.89,4.7c5.08,2,9.98,1.48,14.66-1.32s8.34-7.48,14.1-7.89,11.97,1.72,18,.16c9.92-2.57,16.7-16.31,13.05-25.91-4.09-10.76-21.91-6.94-21.31,4.47.3,5.76,9.31,5.8,9,0h0Z"/>
  <path className="cls-5" d="m58.4,174.9c3.16,10.2,13.29,11.1,22.31,12.8,7.64,1.44,30.13,4.66,21.6,16.96-3.52,5.07-8.28,7.79-14.39,7.99s-11.96-.28-17.92-.56c-8.37-.4-22.07-2.53-28.1,5.01-3.58,4.48,2.75,10.89,6.36,6.36,3.36-4.2,12.27-2.71,17.02-2.57,6.29.19,12.57.72,18.86.78s11.88-.15,17.01-3.56c4.27-2.84,8.33-6.98,10.49-11.67,4.71-10.22-1.31-18.81-10.85-22.62-5.64-2.26-11.73-3.66-17.69-4.79-4.86-.92-14.23-.69-16.03-6.51-1.71-5.52-10.4-3.16-8.68,2.39h0Z"/>
  <path className="cls-5" d="m44.85,213.66c5.28,6.57,12.64,11.45,20.87,13.46,4.88,1.19,10.02.98,14.85,2.36s9.68,5.7,4.62,10c-6.39,5.43-16.04,7-23.99,4.84-8.69-2.36-15.84-10.14-25.44-6.18-5.28,2.18-2.97,10.89,2.39,8.68,5.94-2.45,11.36,2.61,16.64,4.79,4.61,1.9,9.67,2.81,14.66,2.62,8.84-.33,20.97-4.17,25.63-12.44,5.31-9.42-3.44-18.57-12.11-20.98-5.83-1.62-12.03-1.19-17.78-3.23s-10.24-5.65-13.96-10.28-9.96,1.89-6.36,6.36h0Z"/>
  <path className="cls-5" d="m250.3,117.67c-2.08,3.32-4.35,6.58-6.76,9.74,2.41-3.17,4.68-6.42,6.76-9.74h0Z"/>
  <path className="cls-5" d="m253.07,113.01c-.03.05-.06.1-.09.16.49-.88.97-1.76,1.43-2.64-.43.83-.88,1.66-1.34,2.49Z"/>
  <path className="cls-5" d="m252.63,113.78c-.34.59-.67,1.18-1.02,1.77,0,0,0,0,0,0-.42.7-.86,1.4-1.29,2.09.44-.7.87-1.39,1.29-2.09.35-.59.69-1.18,1.02-1.77Z"/>
  <path className="cls-5" d="m148.91,171.15l-.05.04s.02-.01.05-.04Z"/>
  <path className="cls-5" d="m299.97,92.83s-32.75-49.69-38.78-49.69c0,0,.02.06.04.14.56,1.9,6.94,24.58-.34,50.65-1.41,5.05-3.32,10.22-5.89,15.4-.2.4-.38.8-.59,1.2-.46.89-.94,1.77-1.43,2.64,0,0,0,0,0,0-.11.2-.24.41-.35.61-.34.59-.67,1.18-1.02,1.77-.42.7-.86,1.4-1.29,2.09,0,0-.01.02-.02.03-2.08,3.32-4.35,6.58-6.76,9.74-19.6,25.72-47.85,45.82-47.48,51.25,0,0,0,3.7,1.33,6.16h0c.61,1.13,1.51,2.01,2.81,2.12,3.26.3,49.27-16.46,68.66-23.59,1.22-1.3,2.44-2.6,3.62-3.9.59-.64,1.17-1.29,1.73-1.94.03-.03.05-.06.08-.1.54-.63,1.08-1.26,1.6-1.89,0,0,0,0,0,0,14.63-17.79,19.51-36.85,24.07-43.5,4.89-7.15,0-19.2,0-19.2Z"/>
  <path className="cls-5" d="m250.3,117.67h0s.01-.02.02-.03c0,0-.01.02-.02.03Z"/>
  <path className="cls-5" d="m252.99,113.17c-.11.2-.24.41-.35.61.12-.2.24-.41.35-.61,0,0,0,0,0,0Z"/>
  <path className="cls-5" d="m161.53,141.25c.12-2.04.15-4.19.06-6.47-.1-2.71-.31-5.16-.59-7.41l-21.29.69-4.47,9.73,24.62,14.21c.35-1.35.67-2.78.93-4.29l.73-6.46Z"/>
  <path className="cls-5" d="m214.59,101.77c-12.59-10.23-15.91-17.34-16.76-19.91-15.08-6.15-12.44-3.02-23.78,1.03-7.72,2.76-15.61,16.09-19.99,24.61,2.46,3,5.59,8.86,6.94,19.85.28,2.25.48,4.71.59,7.41.09,2.28.06,4.43-.06,6.47-.13,2.3-.39,4.45-.73,6.46-.26,1.51-.58,2.93-.93,4.29-.5,1.91-1.07,3.68-1.69,5.28,7.04-8.3,28.84-31.48,54.45-33.95,17.65-1.7,32.66-8.45,42.38-14,2.57-5.18,4.49-10.35,5.89-15.4-10.02,5.88-33.87,17.95-46.3,7.85Zm-43.62-5.12c-1.18-3.78.57-7.69,3.92-8.74,3.34-1.05,7.01,1.17,8.19,4.95,1.18,3.78-.57,7.69-3.92,8.74-3.34,1.05-7.01-1.17-8.19-4.95Zm35.53,18.39l-23.44,12.37s-2.26-1.64-3.11-4.46c-.85-2.82,8.75-20.05,11.34-22.31,2.59-2.26,12.1,3.11,15.2,6.21,3.11,3.11,0,8.19,0,8.19Z"/>
  <polygon className="cls-5" points="152.13 166.01 117.91 162.17 113.28 174.77 136.72 190.44 152.13 166.01 152.13 166.01"/>
  <path className="cls-5" d="m103.71,197.24l-7.03,12.88,19.58,15.67c4.71-7.79,10.14-17.39,13.73-23.82l-26.29-4.74Z"/>
  <path className="cls-5" d="m106.29,239.85l-20.55-5.42-4.69,7.81,11.84,12.59c6.54-5.83,10.78-11.98,13.4-14.98Z"/>
  <path className="cls-5" d="m212.62,123.32c-25.61,2.47-47.41,25.66-54.45,33.95-1.55,1.83-2.4,2.94-2.4,2.94l-3.65,5.79-15.41,24.44-2.78,4.41s-1.57,2.86-3.95,7.13c-3.59,6.42-9.02,16.03-13.73,23.82-3.84,6.35-7.19,11.49-8.68,12.73-.38.32-.81.77-1.29,1.32-2.62,3-6.85,9.15-13.4,14.98-6.65,5.92-15.68,11.5-27.85,13.07-26.35,3.39-30.12-.38-30.87-5.27-.54-3.53.88-9.99,1.71-13.31.07-.29-.33-.44-.47-.17l-8.77,16.44c3.01,16.13,12.8,15.87,42.78,12.1,29.98-3.76,61.5-48.56,72.05-73.04,10.54-24.47,46.31-60.61,55.34-63.62,4.35-1.45,25.72-7.61,46.73-13.61,2.41-3.17,4.68-6.42,6.76-9.74,0,0,.01-.02.02-.03.44-.7.87-1.39,1.29-2.09,0,0,0,0,0,0,.35-.59.69-1.18,1.02-1.77.12-.2.24-.41.35-.61.03-.05.06-.1.09-.16.46-.83.91-1.65,1.34-2.49.21-.4.39-.8.59-1.2-9.72,5.55-24.72,12.3-42.38,14Z"/>
  <path className="cls-5" d="m86.06,158.59s1.92-19.58,7.45-21.03c3.13-.82,6.23.26,8.34,1.36,1.57.82,2.3,2.67,1.73,4.35-1.42,4.17-4.05,12.21-4.7,16.38-.24,1.57-1.52,2.75-3.1,2.87-3.4.25-8.54-.06-9.73-3.93Z"/>
</svg>


































            </div>
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