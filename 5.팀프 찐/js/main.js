window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/

function loadFn(){

    console.log("로딩완료!");

    // 슬라이드번호 변수
    let snum = 0;
    // 슬라이드 개수
    let scnt = document.querySelectorAll("#slide>li").length;
    console.log("슬개수:",scnt)
    // 1. 대상선정
    // 1-1. 이벤트 대상 : .abtn
    const abtn = document.querySelectorAll(".abtn");
    // console.log(abtn);

    // 1-2. 변경대상 : #slide
    const slide = document.querySelector("#slide");

    // 2. 슬라이드 변경함수 만들기
    const goSlide = (seq) => {
        console.log("슬고우!",seq);

        // 1. 방향에 따른 분기
        // 1-1. 오른쪽버튼 클릭시 : seq===1일때
        if(seq){
            // 슬라이드번호 증가!
            snum++;
            console.log("오른!",snum);
        }
        // 1-2. 왼쪽버튼 클릭시 : seq===1일때
        else{
            // 슬라이드번호 감소!
            snum--;
            console.log("왼쪽!",snum);
        }

        // 2. 한계값 체크 :  
        // if(snum===1) snum = 슬라이드개수-1;
        // else if(snum===슬라이드개수) snum = 0;
        // 처음이전->끝
        if(snum===-1) snum = scnt-1;
        // 끝다음->처음
        else if(snum === scnt) snum = 0;

        // 3. 이동하기
        // 이동대상: slide변수
        slide.style.left = (snum*-100)+"%";
        slide.style.transition = "left .4s ease-in-out";


    }; ///////// goSlide 함수 //////

    // 3. 대상에 이벤트 설정하기
    abtn.forEach((ele,idx) => {

        ele.onclick=()=>{
            goSlide(idx);
        }; ////// click함수 ///////////

    }); //////////// forEach ////////////
    
    
    // 맨밑에 행성넘어가는 JS //////////////////////////////////
    
    // 좌우 화살표 변수 mbtn
    const mbtn = document.querySelectorAll('.mbtn');
    // 행성슬라이드 변수 mslide 
    const mslide = document.querySelector('#mslide');
    // list개수파악용변수
    const ll = document.querySelectorAll('#mslide li').length;
    // 슬라이드번호 담을 변수
    let num = 0;
    // 넘어가는 li가 3개씩이여서 화면100프로에 3개담으려고 3개로짜름
    let length = ll/3;

    const sg = seq => {
        if(seq){
            num++;
        }
        else{
            num--;
        }
    
    if(num===-1) num = num=0;
    else if(num=== length) num= num-1;

    mslide.style.left=(num*-100)+"%";

    }//sg////
    
    // 최종실행코드
    mbtn.forEach((ele,idx)=>{
        ele.onclick=()=>{
            sg(idx);
        };// onclick ////
        ele.onmouseover=()=>{
            ele.style.cursor='pointer';
        }
    });//forEach ////

    // 행성넘어가는 JS 끝부분 ////////////////////////////////////


} ////////////////// loadFn 함수 //////////////

 //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////