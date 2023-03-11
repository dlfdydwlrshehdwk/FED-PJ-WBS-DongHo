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
    



    /* 
        jupiter 코드 
        기능 : 
        1. 1페이지의 슬라이드구역 
            -> 화살표를 누르면 슬라이드의 left값을 이동

        2. 1페이지의 MORE 버튼을 누르면 2페이지로 부드럽게 이동
        
        3. 2페이지의 각 서브제목을 누르면
        누른 서브제목의 글씨와 크기를 바꾸고
        서브제목에 맞는 내용을 출력( 클래스 show를 줘 보이게만듬)
        기본상태는 overview 이다.

        4. 2페이지의 갤러리는 li형태와 grid형태가 있고 
        li버튼을 누르면 li형식의 데이터를 출력하고
        grid버튼을 누르면 grid 형식의 데이터를 출력해준다.
        데이터는 객체를 이용해 출력해준다.
    */

        // 1. 1페이지 슬라이드구역 - 닫히는 슬라이드
        
        // 페이지1 버튼
        const page1_btns = document.querySelectorAll('.btns')
        // 페이지1 ol슬라이드
        const page1_slide = document.querySelector('.slidebx ol')
        // 페이지1 페이지 리스트개수 파악용
        const page1_slide_li = document.querySelectorAll('.slidebx ol li').length;
        // 페이지리스트개수 변수
        let qwe = 0;

        const page1sg = seq => {
            if(prott) return ;
            prott = 1;
            setTimeout(()=>{prott=0;},400)
            if(seq){
                qwe++;
                page1_slide.style.transition = '.2s'
            }
            else{
                qwe--;
                page1_slide.style.transition = '.2s'
            }
        
        if(qwe===-1) qwe = qwe=0;
        else if(qwe=== page1_slide_li-2) qwe= qwe-1;
        page1_slide.style.left=(qwe*-33)+"%";
        }

        page1_btns.forEach((ele,idx)=>{
            ele.onclick=()=>{
                page1sg(idx);
            }
        });

        // 2. more버튼을 누르면page2로 이동 - 완료
        document.querySelector('.p1more').onclick= ()=>{
            event.preventDefault();
           location.href="#page2"
        }








} ////////////////// loadFn 함수 //////////////

 //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////