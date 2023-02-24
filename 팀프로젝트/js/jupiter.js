window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/

function loadFn(){

    console.log("로딩완료!");


    // header 영역 스크롤시 배경색, 찾기버튼 색변경 변수
    const searchbx = document.querySelector(".searchbx");
    const sbx = document.querySelector(".sbx");
    const sicon = document.querySelector(".sicon");


    /****************************************************
     [ GNB메뉴 스크롤 시 색변경 ]
     ******************************************************/
    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            document.querySelector('.top').classList.add("on");
            searchbx.style=('background-color: #506a7e;');
            sicon.style=('background-color: #506a7e');
        } else {
            document.querySelector('.top').classList.remove("on");
            searchbx.style=('background-color: #575a5ecb;');
            sicon.style=('background-color: #575a5ecb;');
        }
    });

    /****************************************************
     [ 검색창 클릭시 열고 닫기 ]
    ******************************************************/
    sicon.onclick = ()=>{
        sbx.classList.toggle("on");
    };


    /************************************************* 
        함수명: chgMenu
        기능: 전체메뉴 보이기/숨기기
    *************************************************/
    // 햄버거버튼요소
    const ham = document.querySelector(".ham");
    console.log("햄버거있니?",ham);

    // 햄버거요소에 이벤트 설정하기 //////
    ham.onclick = chgMenu;
    function chgMenu(){
        // 1. 호출확인
        console.log("나야나!");
        
        // 2. 대상선정 : .top 요소
        var tg = document.querySelector(".top");

        // 3. 변경내용 : 대상에 클래스 "on"넣기
        tg.classList.toggle("active");

    } /////////////////// chgMenu 함수 ///////////////
    //////////////////////////////////////////////////
    


    


    
    /***************************************************
        [ 좌우뚫려있는 자유로운 행성박스 ]
    ***************************************************/
    
    
    // 좌우 화살표 변수 mbtn
    const mbtn = document.querySelectorAll('.mbtn');
    // 행성슬라이드 변수 mslide 
    const mslide = document.querySelector('#mslide');
    // 광클금지 변수
    let prott = 0;

    const gs = (seq)=>{
        if(prott) return ;
        prott = 1;
        setTimeout(()=>{
            prott=0;
        },400); //timeout ////
        
        // li리스트 변수
        let clist = mslide.querySelectorAll('#mslide li');

        // 오른쪽 버튼
        if(seq){
            // 한박스가아니라 박스기준1/3 만 이동해야하므로 33%
            mslide.style.left = "-33.33%";
            mslide.style.transition='.4s ease-in-out';
            setTimeout(()=>{
                mslide.appendChild(clist[0]);
                mslide.style.left = '0'
                mslide.style.transition='none';
            },400);//timeout////
        }// if ////

        // 왼쪽버튼
        else {
            mslide.insertBefore(clist[clist.length-1],clist[0]);
            // 한박스가아니라 박스기준1/3 만 이동해야하므로 33%
            mslide.style.left = '-33.33%';
            mslide.style.transition='none';
            setTimeout(()=>{
                mslide.style.left='0';
                mslide.style.transition='.4s ease-in-out';
            },0);//timeout////
        }// else ////
    };//gs////

    // 실행코드
    mbtn.forEach((ele,idx)=>{
        ele.onclick=()=>{
            gs(idx);
        };//onclick////
        ele.onmouseover=()=>{
            ele.style.cursor='pointer';
        };//onmouseover ////
    });//forEach////
    








} ////////////////// loadFn 함수 //////////////

 //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////