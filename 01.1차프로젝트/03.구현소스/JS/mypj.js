// 변수한개를 지정 mob
// width가 800이하일떄 변수가 1이된다. 이상일땐 0
let mob = 0;
if (window.innerWidth < 600) mob = 1;
// console.log("처음mob:",mob);

// 리사이즈를해서 보이는크기가 800이하일경우 mob를 1로
window.addEventListener("resize", () => {
    if (window.innerWidth < 600) mob = 1;
    else mob = 0;
    console.log("리사이즈mob:", mob);
    if(mob ===1){
        document.querySelector('.ctbtn').style.display = 'none';
    }
    else if(mob === 0) {
        document.querySelector('.ctbtn').style.display = 'block';
    }
});

window.addEventListener("DOMContentLoaded", () => {
    // 새로고침시 화면맨위로설정
    setTimeout(()=>{
        window.scrollTo(0,0);
    },100) // 작동완료
    document.querySelector(".nav").classList.add("on");
    document.querySelector(".pob").classList.add("on");
    
    // 셀렉터 변수화
    const qs = (x) => document.querySelector(x);
    const qsa = (x) => document.querySelectorAll(x);

    // 데이터저장변수
    const h1 = ["BUSINESS", "About FESCARO", "Partnership", "Contact us"];

    // (2) 인디케이터메뉴
    // const indic = document.querySelectorAll('.indic a');
    // console.log(indic);

    // [ 이벤트 연결 함수등록하기 ] ////
    // 인디케이터메뉴 이벤트연결
    // indic.forEach((ele,idx)=>{//요소 , 순번
    //     ele.addEventListener('click',()=>movePg(idx));
    // }); // forEach ////

    // 변수 설정하기
    // 전체 페이지 변수
    let pgnum = 0; //현재 페이지 번호(첫페이지 0)
    // 전체 페이지 수
    const pgcnt = qsa(".page").length; //6개!
    // 광스크롤 금지 변수
    let prot_sc = 0;

    const page = qsa(".page");
    // 대상 page on주면 애니메이션
    // const page = qsa('.page');
    // 각 h1태그 출력칸
    const s1 = qs(".stage1");
    const s3 = qs(".stage3");
    const s4 = qs(".stage4");
    const s5 = qs(".stage5");
    const qor = 100;
    // 휠이벤트설정
    window.addEventListener("wheel", wheelFn, { passive: false });
    // 스크롤이벤트설정
    window.addEventListener("scroll", scrollFn, { passive: false });
    console.log(qs('#pg1').innerHeight)
    const retVal = (x) => x.getBoundingClientRect().top;


    function scrollFn() {
        let hhh = window.scrollY;
        if (!mob) return;

        page.forEach((ele) => {
            let point = retVal(ele);
            // console.log(point);
            if (point < 150 && point > -150) ele.classList.add("on");
            else ele.classList.remove("on");
        });
        console.log(window.innerHeight)
        console.log(hhh);
        // 모바일때 네브바가 딸려오게하기 기능
        if(hhh > 150){
            qs('.nav').style.backgroundColor = '#fff';
            qs('.nav').style.height = '80px';
            qs('.btn').style.color = '#000'
            qsa(".logo img")[1].classList.add("on");
            qsa(".logo img")[0].classList.remove("on");
            qs(".tbtn").style.color = "#333";
        }
        else {
            qs('.nav').style.backgroundColor = '';
            qs('.nav').style.height = '120px';
            qs('.btn').style.color = '#fff'

            qsa(".logo img")[0].classList.add("on");
            qsa(".logo img")[1].classList.remove("on");
            qs(".tbtn").style.color = "#fff";
        }



        // 모바일쿼리시 기능 글씨 올라오는거 
        if(hhh > (window.innerHeight) - qor 
        // || hhh < (window.innerHeight)*2
        ){
            let hcode =""
        let idx = 0;
            for(let x of h1[0]){
                if(x ==="") x="&nbsp;";
                hcode +=`
                <h1 style = "transition-delay:${idx*0.02}s">${x}</h1>
                `;
                idx++;
            }
            console.log( qs('#pg'+(2)))
            qs('#pg'+(2)).querySelector('.stage').innerHTML = hcode;
        }
        if(hhh > (window.innerHeight*2) - qor 
        // || hhh < (window.innerHeight) * 3
        ){
            let hcode =""
            let idx = 0;
            for(let x of h1[1]){
                if(x ==="") x="&nbsp;";
                hcode +=`
                <h1 style = "transition-delay:${idx*0.02}s">${x}</h1>
                `;
                idx++;
            }
            qs('#pg'+(3)).querySelector('.stage').innerHTML = hcode;
        }
        if(hhh > (window.innerHeight * 3) - qor 
        // || hhh < (window.innerHeight) * 4
        ){
            let hcode =""
        let idx = 0;
            for(let x of h1[2]){
                if(x ==="") x="&nbsp;";
                hcode +=`
                <h1 style = "transition-delay:${idx*0.02}s">${x}</h1>
                `;
                idx++;
            }
            qs('#pg'+(4)).querySelector('.stage').innerHTML = hcode;
        }
        if(hhh > (window.innerHeight * 4) - qor 
        // || hhh < (window.innerHeight) * 5
        ){
            let hcode =""
        let idx = 0;
            for(let x of h1[3]){
                if(x ==="") x="&nbsp;";
                hcode +=`
                <h1 style = "transition-delay:${idx*0.02}s">${x}</h1>
                `;
                idx++;
            }
            qs('#pg'+(5)).querySelector('.stage').innerHTML = hcode;
        }

    }

    // 휠 이벤트 함수 만들기
    function wheelFn(e) {
        // 사이즈가 일정이상이면 휠이 안되게 
        if (mob) return;

        // 기본기능 멈추기
        e.preventDefault();

        // 광스크롤 막기
        if (prot_sc === 1) return;
        prot_sc = 1;
        setTimeout(() => (prot_sc = 0), 800);

        // 휠 방향 알아내기
        // 이벤트객체.wheelDelta
        let dir = e.wheelDelta; //위120 아래 -120

        // 방향에 따른 페이지 번호 증감
        // 페이지 밑방향 : 페이지 번호 증가
        if (dir < 0) {
            pgnum++;
            // 한계수 지정 총페이지수 -1
            if (pgnum > pgcnt - 1) pgnum = pgcnt - 1;
        } // if 문 ////

        // 스크롤 윗뱡향 : 페이지 번호 감소
        else {
            pgnum--;
            // 한계수 : 페이지 첫번호 인 0
            if (pgnum < 0) {
                pgnum = 0;
            }
        } //else ////
        console.log("페이지버놓", pgnum);
        updatePg();
        // updatePg(indic);
    } // wheel 이벤트 ////

    // 함수명 updatePg
    // 기능 페이지 이동 설정값 업데이트

    function updatePg() {
        // obj - 변경할 메뉴전체 객체
        // console.log('업데이트')
        // 페이지 이동하기
        // scrollTO(가로,세로)
        window.scrollTo(0, window.innerHeight * pgnum);
        // 세로 이동위치 : 윈도우 높이값* 페이지 번호

        setTimeout(() => {
            // console.log("실행!!!");
            page.forEach((ele, idx) => {
                ele.classList.remove("on");
                // console.log(ele)
            });

            page[pgnum].classList.add("on");
        }, 300);

        console.log(page[pgnum]);
        console.log(pgnum);

        ///////////////////////////////////////////////////////////
        // 휠 했을때 페이지별 분기
        ///////////////////////////////////////////////////////////

        // 컨택트동그라미 등장 기능
        if (pgnum !== 0) {
            qs(".ctbtn").classList.add("on");
        }
        // 첫페이지
        if (pgnum === 0) {
            qs(".ctbtn").classList.remove("on");
            qsa(".nav>ul>li>a").forEach((ele) => {
                ele.style.color = "white";
            });
            // nav 로고 이미지 색변경
            qsa(".logo img")[0].classList.add("on");
            qsa(".logo img")[1].classList.remove("on");
            // 탭버튼 색변경
            qs(".tbtn").style.color = "white";
            qs(".nav").classList.add("on");
        }
        // 페이지2
        else if (pgnum === 1) {
            qsa(".nav>ul>li>a").forEach((ele) => {
                ele.style.color = "white";
            });
            // nav 로고 이미지 색변경
            qsa(".logo img")[0].classList.add("on");
            qsa(".logo img")[1].classList.remove("on");
            // 탭버튼 색변경
            qs(".tbtn").style.color = "white";
            qs(".nav").classList.add("on");

            pg2Action();
        }
        // 3페이지
        else if (pgnum === 2) {
            qsa(".nav>ul>li> a").forEach((ele) => {
                ele.style.color = "#333";
            });
            // nav 로고 이미지 색변경
            qsa(".logo img")[1].classList.add("on");
            qsa(".logo img")[0].classList.remove("on");
            // 탭버튼 색변경
            qs(".tbtn").style.color = "#333";
            qs(".nav").classList.add("on");
        } // if

        // 4페이지
        else if (pgnum === 3) {
            // nav li 색변경
            qsa(".nav>ul>li> a").forEach((ele) => {
                ele.style.color = "#333";
            });
            // 로고 이미지 변경
            qsa(".logo img")[1].classList.add("on");
            qsa(".logo img")[0].classList.remove("on");
            // 탭버튼 색변경
            qs(".tbtn").style.color = "#333";
            qs(".nav").classList.add("on");
        }
        // 5페이지
        else if (pgnum === 4) {
            qsa(".nav>ul>li>a").forEach((ele) => {
                ele.style.color = "white";
            });
            // nav 로고 이미지 색변경
            qsa(".logo img")[0].classList.add("on");
            qsa(".logo img")[1].classList.remove("on");
            // 탭버튼 색변경
            qs(".tbtn").style.color = "white";
            qs(".tbtn").style.opacity = "1";
            qs(".nav").classList.add("on");
        }
        // 랏페이지
        else if (pgnum === 5) {
            console.log(555);
            // 탭버튼 없애기
            qs(".tbtn").style.opacity = 0;
            qs(".nav").classList.remove("on");
        } else {
            // nav li 색변경
            qsa(".nav>ul>li> a").forEach((ele) => {
                ele.style.color = "#fff";
            });
            // 로고 이미지 색변경
            qsa(".logo img")[0].classList.add("on");
            qsa(".logo img")[1].classList.remove("on");
            // 탭버튼 생기게하기 + 흰색
            qs(".tbtn").style.opacity = 1;
            qs(".tbtn").style.color = "white";
        }

        if (pgnum !== 1) {
            compStop();
        }

        // 컨택버튼과 업버튼 위치바꾸는 거
        let tg1 = document.querySelector(".ctbtn");
        let tg2 = document.querySelector(".upbtn");

        if (pgnum !== 5 || pgnum !== 0) {
            tg1.style.bottom = "12%";
            tg2.style.bottom = "4%";
        }

        if (pgnum === 5) {
            tg1.style.bottom = "calc(704px + 12%)";
            tg2.style.bottom = "calc(704px + 4%)";
        }

        if (pgnum === 0) {
            tg1.style.bottom = "4%";
            tg2.style.bottom = "4%";
        }

        if(pgnum > 0 && pgnum < 6) h1txt();
    } //updatePg 함수 ////

    // 각 페이지마다 맞는 내용 한글자씩 설정된 함수들
    // 페이지2텍스트 함수
    // function p2h1txt() {
    //     let hcode = ""; // 코드 저장변수
    //     let idx = 0; //순번변수

    //     for (let x of h1[0]) {
    //         if (x === " ") x = "&nbsp;";
    //         hcode += `
    //     <h1 style = "transition-delay:${idx * 0.02}s">${x}</h1>
    //     `;

    //         idx++;
    //     }
    //     s1.innerHTML = hcode;
    // }
    // 페이지3 텍스트함수
    // function p3h1txt() {
    //     let hcode = ""; // 코드 저장변수
    //     let idx = 0; //순번변수

    //     for (let x of h1[1]) {
    //         if (x === " ") x = "&nbsp;";
    //         hcode += `
    //     <h1 style = "transition-delay:${idx * 0.02}s">${x}</h1>
    //     `;

    //         idx++;
    //     }
    //     s3.innerHTML = hcode;
    // }
    // // 페이지4 텍스트함수
    // function p4h1txt() {
    //     let hcode = ""; // 코드 저장변수
    //     let idx = 0; //순번변수

    //     for (let x of h1[2]) {
    //         if (x === " ") x = "&nbsp;";
    //         hcode += `
    //     <h1 style = "transition-delay:${idx * 0.02}s">${x}</h1>
    //     `;

    //         idx++;
    //     }
    //     s4.innerHTML = hcode;
    // }
    // // 페이지5 텍스트함수
    // function p5h1txt() {
    //     let hcode = ""; // 코드 저장변수
    //     let idx = 0; //순번변수

    //     for (let x of h1[3]) {
    //         if (x === " ") x = "&nbsp;";
    //         hcode += `
    //     <h1 style = "transition-delay:${idx * 0.02}s">${x}</h1>
    //     `;

    //         idx++;
    //     }
    //     s5.innerHTML = hcode;
    // }

    // 각 그거를 줄이고 싶은데 미구현
    function h1txt () {
        let hcode =""
        let idx = 0;
            for(let x of h1[pgnum-1]){
                if(x ==="") x="&nbsp;";
                hcode +=`
                <h1 style = "transition-delay:${idx*0.02}s">${x}</h1>
                `;
                idx++;
            }
            qs('#pg'+(pgnum+1)).querySelector('.stage').innerHTML = hcode;
    }
    // h1txt();
    // 각 글자 한글자씩 출력해주는거 일단실행 opacity0처리되어있음
    // page에 클래스 on주면 애니메이션있음
    // p2h1txt();
    // p3h1txt();
    // p4h1txt();
    // p5h1txt();

    // 페이지 2 인터벌

    // 대상 .bx3 ul 슬라이드박스
    const p2slide = qs(".bx3slide");
    // 대상 슬라이드의 li들
    const p2slist = qsa(".bx3slide li");
    // 대상 페이지 2의 버튼들
    const p2btns = qsa(".p2btns div");
    // 대상 게이지 .p2gage
    const p2gage = qs(".p2gage");

    // console.log(p2gage)
    // 기능 : 일정시간마다 왼쪽으로 -39%씩이동
    // 화살표를 누르면 맨끝사진을 다른맨끝으로 잘라서 넣은 후 방향에 맞게 이동
    // 기능 : 게이지가 인터벌시간동안 -114%에서 0으로 옴

    // 광클금지변수 : 0 - 허용, 1 - 불허용
    let qwer = 0;

    // 2. 슬라이드 변경함수 만들기
    // 호출시 seq에 들어오는 값중 1은 오른쪽, 0은 왼쪽
    const goSlide = (seq) => {
        // 광클금지 설정하기 //////
        if (qwer) return;
        qwer = 1; // 잠금!
        setTimeout(() => {
            qwer = 0; // 해제!
        }, 400); /// 0.4초후 해제! ///

        //  console.log("나,들어왔어!!!");

        // 0. 현재의 슬라이드 li수집하기
        let clist = document.querySelectorAll(".bx3slide li");
        // clist -> current list 현재 리스트
        // 1. 방향에 따른 분기
        // 1-1. 오른쪽버튼 클릭시 ////////////////
        if (seq) {
            console.log("오른!");
            reGage();
            // 1. 슬라이드 이동전 먼저 잘라낸다!
            // 이유: 슬라이드 순서를 왼쪽이동과 동일하게 함!
            // 중앙확대 트랜지션 적용시 동작이 달라지므로!

            // (1-1) 바깥에 나가있는 첫번째 슬라이드
            //       li를 잘라서 맨뒤로 보낸다!
            p2slide.appendChild(clist[0]);
            // (1-2) 동시에 left값을 -110%으로 변경한다!
            p2slide.style.left = "-117%";
            // (1-3) 트랜지션 없애기!
            p2slide.style.transition = "none";

            // (2) 오른쪽 버튼 클릭시 다음 슬라이드가
            //     나타나도록 슬라이드 박스의 left값을
            //     -78%로 변경시킨다.

            // [코드분리하기!] //////////////////////////
            // -> 같은속성변경을 같은 메모리공간에서 수행하면
            // 변경효과가 없음!!!
            setTimeout(() => {
                p2slide.style.left = "-156%";
                p2slide.style.transition = "left .4s ease-in-out";
            }, 10); //// 타임아웃 //////
            // 시간에 0을쓰면 인터발호출시 트랜지션이 안먹히는 에러가 있음
            // 1만써도 괜찮음
        } //////////// if : 오른쪽클릭시 //////

        // 1-2. 왼쪽버튼 클릭시 //////////////
        else {
            reGage();
            console.log("왼쪽!");
            // (1) 왼쪽버튼 클릭시 이전 슬라이드가
            // 나타나도록 하기위해 우선 맨뒤 li를
            // 맨앞으로 이동한다.
            // slide.insertBefore(넣을놈,넣을놈전놈)
            // slide.insertBefore(맨끝li,맨앞li)
            p2slide.insertBefore(clist[clist.length - 1], clist[0]);

            // (2) 동시에 left값을 -195%로 변경한다.
            p2slide.style.left = "-195%";
            // 이때 트랜지션을 없앤다(한번실행후 부터 생기므로!)
            p2slide.style.transition = "none";

            // (3) 그 후 left값을 -78%으로 애니메이션하여
            // 슬라이드가 왼쪽에서 들어온다.
            // 동일 속성인 left가 같은 코딩처리 공간에 동시에
            // 있으므로 이것을 분리해야 효과가 있다!
            // setTimeout을 사용한다!
            setTimeout(() => {
                p2slide.style.left = "-156%";
                p2slide.style.transition = "left .4s ease-in-out";
            }, 10); ////// 타임아웃 /////////
        } //////////// else : 왼쪽클릭시 //////
        // 2. 현재 슬라이드 순번과 같은 블릿표시하기
        // 대상: .indic li -> indic변수
        // 2-1. 현재 배너리스트 업데이트하기
        // clist = p2slide.querySelectorAll("li");
        // !!!!! 오른쪽이든 왼쪽이든 먼저 잘라내기 때문에
        // 순번은 3번째로 일치함!!!!!!
        // console.log("다시수집:",clist);

        // 2-2.방향별 읽어올 슬라이드 순번으로 "data-seq"값 읽어오기
        // 세번째 슬라이드가 주인공이니까 0,1,2 즉 2번을 쓰면됨!!!
        // let cseq = clist[2].getAttribute("data-seq");
        //  console.log("현재순번:", cseq);

        // 2-3. 블릿초기화 - 불릿없음
        // for (let x of indic) x.classList.remove("on");

        // 2-4. 읽어온 슬라이드 순번의 블릿에 클래스 "on"넣기 -없음
        // indic[cseq].classList.add("on");
    }; ////////// goSlide함수 ///////////

    // 3. 이동버튼대상에 이벤트 설정하기
    p2btns.forEach((ele, idx) => {
        ele.onclick = () => {
            // 0. 기본이동막기
            event.preventDefault();
            // 1. 인터발지우기함수 호출!
            setTimeout(() => goGage(), 5000);
            clearAuto();
            // 2. 슬라이드 함수 호출!
            goSlide(idx);
        }; ///// click함수 //////
    }); /////// forEach //////////

    // 인터발함수 지우기위한 변수
    let autoI;
    // 타임아웃함수 지우기위한 변수
    let autoT;
    // 인터발
    let autoG;
    let autoGt;

    /************************************ 
    함수명: autoSlide
    기능: 인터발함수로 슬라이드함수 호출
************************************/
    function autoSlide() {
        console.log("인터발시작!");
        // 인터발함수로 슬라이드함수 호출하기
        // autoI 는 3초후에 고슬라이드 우측을 실행해줘
        autoI = setInterval(() => goSlide(1), 3000);
        // autoG = setInterval(()=>goGage(),5000);
    } ////////////// autoSlide함수 //////////

    // 자동넘김 최초호출!
    // autoSlide();

    /************************************ 
    함수명: clearAuto
    기능: 인터발함수를 지우고 다시셋팅
************************************/
    function clearAuto() {
        console.log("인터발멈춤!");
        // 1. 인터발 지우기
        clearInterval(autoI);
        // clearInterval(autoG);
        // 2. 타임아웃도 지우지 않으면
        // 쌓여서 타임아웃 쓰나미실행이 발생한다!
        clearTimeout(autoT);
        // clearTimeout(autoGt);
        // 3. 잠시후 다시 작동하도록 타임아웃으로
        // 인터발함수를 호출한다!
        // 5초후(인터발은 3초후, 토탈 8초후 작동시작)
        // 5초뒤에 오토슬라이드(3초후에 슬라이드 우측으로가는거 실행)
        autoT = setTimeout(autoSlide, 5000);
        // autoGt = setTimeout(autoGage,5000);
    } ///////// clearAuto 함수 /////////////

    function reGage() {
        console.log("게이지삭제");
        p2gage.style.transition = "none";
        p2gage.style.left = "-114%";
    }
    function goGage() {
        console.log("게이지충전");
        setTimeout(() => {
            p2gage.style.transition = "3s ease-in-out";
            p2gage.style.left = "0%";
        }, 30);
    }
    function autoGage() {
        console.log("자동게이지");
        autoG = setInterval(() => goGage(), 3000);
    }
    function clearGage() {
        console.log("오토게이지삭제");
        clearInterval(autoG);
        clearTimeout(autoGt);
        autoGt = setTimeout(autoGage, 5000);
    }
    function compStop() {
        console.log("오토게이지완전멈춤");
        clearInterval(autoG);
        clearInterval(autoI);
        clearTimeout(autoGt);
        clearTimeout(autoT);
        setTimeout(resetSlide, 400);
    }
    // 최초 게이지
    //
    // goGage();
    // autoGage();

    function pg2Action() {
        autoSlide();
        goGage();
        autoGage();
    }

    //../00.자료수집/02.이미지데이터/car1.jpg
    // bx3slide

    function resetSlide() {
        let seq = 0;
        let tgele = document.querySelector(".bx3slide");
        tgele.querySelectorAll("img").forEach((ele, idx) => {
            seq++;
            if (seq === 5) seq = 1;
            ele.setAttribute("src", `../00.자료수집/02.이미지데이터/car${seq}.jpg`);
        });
        tgele.style.left = "-156%";
        p2gage.style.left = "-104%";
    }

    // 사이트맵 버튼 이동 시작 //////////////////////////////////

    // 메인페이지 버튼
    btn = qs(".btn");
    // 사이트맵
    sitemap = qs(".sitemap");
    // 사이트맵 버튼
    stb = qs(".sitemap_btn");

    // 메인페이지 사이트맵 버튼누를시 사이트맵에 클래스 on 추가
    btn.onclick = () => {
        // console.log(btn);
        sitemap.style.display = 'block'
        setTimeout(()=>{
            sitemap.classList.add("show");
            document.body.style.overflow = "hidden";
        })
    };

    // 사이트맵에 버튼클릭시 사이트맵에 클래스 on 빼기
    stb.onclick = () => {
        sitemap.style.display = 'none'
        sitemap.classList.remove("show");
        document.body.style.overflow = "";
    };
    // 완료 !
    // 사이트맵 버튼 이동 끝 ///////////////////////////////////

    // 위로가는 화살표 버튼 누르면 위로가기 /////////////////////////////////
    // 이벤트대상 .upbtn
    const upbtn = qs(".upbtn");

    upbtn.onclick = () => {
        // 기본기능 막기
        event.preventDefault();
        pgnum = 0;
        // 페이지0으로 가기
        window.scrollTo(0, window.innerHeight * pgnum);
        qs(".ctbtn").classList.remove("on");
        qsa(".nav>ul>li>a").forEach((ele) => {
            ele.style.color = "white";
            console.log(pgnum);
        });
        // nav 로고 이미지 색변경
        qsa(".logo img")[0].classList.add("on");
        qsa(".logo img")[1].classList.remove("on");
        // 탭버튼 색변경
        qs(".tbtn").style.color = "white";
        // pgnum 0으로 교체
    };
    // 완료 !
    // 위로가는 화살표 버튼 끝 /////////////////////////////////

    // 로고 클릭시 페이지 새로고침 ////
    // 이벤트대상 .logo a
    const logoa = qsa(".logo a");
    logoa.forEach((ele) => {
        ele.onclick = () => {
            window.location.reload();
        };
    });

    // 완료
    // 로고 클릭시 페이지 새로고침 끝 ////

    // 로고색 바뀌기! //////////////////////////////////////
    // 기능 : nav ul에 마우스들어가면 로고이미지 1에 on빼고 로고이미지2에 on넣어주기, 마우스 빠지면 로고이미지2에 on뺴고 로고이미지에 1넣어주기

    // 대상 : .nav ul
    // const navul = qs('.nav ul')
    // const navlia = qsa('.nav>ul>li>a');
    // // 변경대상 : .logo img 2개
    // const logoimg = qsa('.logo img')
    // navul.onmouseenter= () => { // navul에 마우스를 올리면
    //     console.log(logoimg[0])
    //     console.log(logoimg[1])
    //     if(logoimg[0].classList.contains('on')){ // 로고이미지가 흰색이라면
    //         console.log('안녕')
    //         logoimg[0].classList.remove('on');
    //         logoimg[1].classList.add('on');
    //     }
    //     navlia.forEach((ele)=>{
    //         console.log(ele)
    //         if(ele.style.color=='white'){
    //             ele.style.color = '#333'
    //         }
    //     })

    // } // mouseenter ////
    // navul.onmouseleave= () => {
    //     // 시간차를 줘야할거같아서 0.3초 줌!
    //     setTimeout(() => {
    //         if(logoimg[1].classList.contains('on')){
    //             logoimg[1].classList.remove('on');
    //             logoimg[0].classList.add('on');
    //         }
    //     },300)
    // } // mouseenter ////

    // 완료! //

    // 로고색 바뀌기! 끝 //////////////////////////////////////

    const ctbtn = qs(".ctbtn");
    // 컨택트 버튼 누르면 컨택트페이지로 가기!!////
    // 기능 : 컨택트버튼을 누르면 컨택트 페이지로 넘어감
    // 이벤트대상 : .ctbtn
    ctbtn.onclick = () => {
        // 기본기능 막기
        event.preventDefault();
        // 페이지0으로 가기
        pgnum = 4;
        window.scrollTo(0, window.innerHeight * pgnum);
        // pgnum 0으로 교체
        // pgnum = 4;
        updatePg();
    };

    // 컨택트 버튼 누르면 컨택트페이지로 가기!! 끝////

    // nav ul 작업
    // nav ul
    const navul = qs(".nav ul");
    // logo img [0]백 [1]흑 on주면 등장
    const logoimg = qsa(".logo img");
    navul.onmouseenter = () => {
        console.log("hi");
        if (pgnum === 0) {
            qsa(".nav ul>li>a").forEach((ele) => {
                ele.style.color = "black";
            });
            logoimg[0].classList.remove("on");
            logoimg[1].classList.add("on");
            qs(".tbtn").style.color = "#333";
        } //if ////
        else if (pgnum === 1) {
            qsa(".nav ul>li>a").forEach((ele) => {
                ele.style.color = "black";
            });
            logoimg[0].classList.remove("on");
            logoimg[1].classList.add("on");
            qs(".tbtn").style.color = "#333";
        } else if (pgnum === 4) {
            qsa(".nav ul>li>a").forEach((ele) => {
                ele.style.color = "black";
            });
            logoimg[0].classList.remove("on");
            logoimg[1].classList.add("on");
            qs(".tbtn").style.color = "#333";
        }
    }; //mouseenter

    navul.onmouseleave = () => {
        console.log("hi");
        if (pgnum === 0) {
            setTimeout(() => {
                qsa(".nav ul>li>a").forEach((ele) => {
                    ele.style.color = "white";
                });
                logoimg[1].classList.remove("on");
                logoimg[0].classList.add("on");
                qs(".tbtn").style.color = "white";
            }, 200);
        } //if ////
        else if (pgnum === 1) {
            setTimeout(() => {
                qsa(".nav ul>li>a").forEach((ele) => {
                    ele.style.color = "white";
                });
                logoimg[1].classList.remove("on");
                logoimg[0].classList.add("on");
                qs(".tbtn").style.color = "white";
            }, 200);
        } else if (pgnum === 4) {
            setTimeout(() => {
                qsa(".nav ul>li>a").forEach((ele) => {
                    ele.style.color = "white";
                });
                logoimg[1].classList.remove("on");
                logoimg[0].classList.add("on");
                qs(".tbtn").style.color = "white";
            }, 200);
        }
    }; //mouseenter
}); //로드구역 ///
