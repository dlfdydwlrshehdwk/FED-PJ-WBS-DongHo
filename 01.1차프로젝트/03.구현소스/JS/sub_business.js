// 페스카로 subpage business JS  sub_business.js 

// 셀렉터 변수화
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);


window.addEventListener('DOMContentLoaded',()=>{
    // 변수 모음

    // nav 바 - 서브에서는 fixed가 아닌 상태
    const nav = qs('.nav')
    nav.style.position = 'absolute';

    // 1페이지 배경 
    const spg1bg = qs('.spage1bg');
    setTimeout(()=>{
        spg1bg.classList.add('sm');
    },3000)

    // - 1페이지 맨밑의 .bbx 박스 에 li들 
    const bbxli = qsa('.bbx ul>li');

    // 밑에 박스
    const bbx = qs('.bbx');
    console.log(bbx)
    
    // 위치값 이동용변수모음
    const he = qs('.bbx ul');
    // ul자체크기
    const qq = he.scrollHeight;  // -> 81 he 의 높이값
    // 전체높이
    const ww = he.getBoundingClientRect().top;
    // 전체높이에서 ul크기 뺴서 거기로 가기
    const hh = ww - qq;
    
    // 서브페이지 휠 사용시 위한 1페이지 변수
    const spg1 = qs('.spage1')
    console.log(spg1)

    // 2페이지부터 랩핑박스
    const fromendpagewrap = qsa('.fromendpagewrap')









    // 서브페이지 1의 높이의 반정도 내려오면 서브페이지1의 클래스를 지우고 
    // 서브페이지 2의 내용이 등장하게 끔 하는 그런 기능?
    // 중간 값은 hhh / 2
    // 변수값 spg1bg
    const hhh = spg1bg.clientHeight; // 959
    // 전체문서의 높이값
    const ahh = qs('main').clientHeight; // 3595
    console.log(hhh);
    console.log(ahh);
    
    const main = qs('main');
    // // console.log(window)
    // main.addEventListener('wheel',function(){
    //     let scTop = window.scrollY;
    //     console.log(scTop);
    //     // let st = window.top;
    //     // console.log(st)
    //     if(scTop < hhh / 2){
    //         console.log('성공')
    //     }
    //     else if(scTop > hhh / 2){
    //         console.log('실패')
    //     }
    // })

    

    // 서브페이지 1에서 휠사용시 설정 
    // 지정된 방향으로 내려감 + 글씨 on빼기 배경화면sm빼기
    window.addEventListener('scroll',()=>{
        // 기본기능을 정지
        event.preventDefault();
        // 휠방향 알아내기
        let wa = event.wheelDelta;
        
        // console.log(wa) // 밑 = -120 위 120
        console.log('hi');
        let scb = document.querySelector('main').scrollTop;
        if(wa >= -120 && wa <0){
            scrollTo(0,hh);
            qs('.h2wrap').classList.remove("on");
            qs('.pwrap').classList.remove("on");
            spg1bg.classList.remove('sm');
        }
        else if(wa > 0  && wa <= 120){
            scrollTo(0,0)
            qs('.h2wrap').classList.add("on");
            qs('.pwrap').classList.add("on");
            spg1bg.classList.add('sm');
        }
    })
    // spg1.addEventListener('wheel',()=>{
    //     // 기본기능을 정지
    //     event.preventDefault();
    //     // 휠방향 알아내기
    //     let wa = event.wheelDelta;
        
    //     // console.log(wa) // 밑 = -120 위 120
    //     // console.log('hi');
    //     let scb = document.querySelector('main').scrollTop;
    //     if(wa >= -120 && wa <0){
    //         scrollTo(0,hh);
    //         qs('.h2wrap').classList.remove("on");
    //         qs('.pwrap').classList.remove("on");
    //         spg1bg.classList.remove('sm');
    //     }
    //     else if(wa > 0  && wa <= 120){
    //         scrollTo(0,0)
    //         qs('.h2wrap').classList.add("on");
    //         qs('.pwrap').classList.add("on");
    //         spg1bg.classList.add('sm');
    //     }
    // })

    // console.log(qs('.wrap'))
    //     qs('.wrap').addEventListener('wheel',function(){
    //         console.log('hi')
    //         let scTop = window.scrollY;
    //         console.log(scTop)
    //     })



    // - 서브페이지의 2번째페이지부터 끝까지 가는 랩핑박스
    // .business_sub_1~4 까지 4개가있다. 4개는 dn + opacity 0 상태
    // const fromendpagewrap = qsa('.fromendpagewrap')


    // 화면 최초실행시
    // 네브바와 밑에 바를 나타나게하기
    setTimeout(()=>{
        document.querySelector(".nav").classList.add("on");
        bbx.classList.add("on");
    },400)
    const asdf = document.querySelector('.h2wrap h2').innerHTML;

    // 가운데 큰글씨를 계단식으로 나오게 하기위해 for of 문
    let hcode = ""
    let idx = 0;
    for(let x of asdf) {
        console.log(x);
        hcode +=`
                <h2 style = "transition-delay:${idx*0.03}s">${x}</h2>
                `;
        idx++;
    } // for ////

    // 가운데 큰글씨가 네브바와 밑바보다 늦게 나타나게 하기위함
    qs('.h2wrap').innerHTML = hcode;
    setTimeout(()=>{
        qs('.h2wrap').classList.add("on");
        qs('.pwrap').classList.add("on");

    },1300)

    // 새로고침시 화면맨위로설정
    setTimeout(()=>{
        window.scrollTo(0,0);
    },100) // 작동완료
    // setTimeout(()=>{
    //     document.querySelector(".nav").classList.add("on");
    //     bbx.classList.add("on");
    // },400)
    // document.querySelector(".nav").classList.add("on");
    // bbx.classList.add("on");
    
    // 1페이지에서 휠 시 hh로 이동



    
    

    // li 들을 누르면 ~~ 에 관한 내용들
    qsa('.bbx ul>li>a').forEach((ele)=>{
        ele.prevendefault
    })
    bbxli.forEach((ele,idx)=>{
        
        ele.onclick= () =>{
            // 안에 있는 a의 기본기능막기
            qsa('.bbx ul>li>a').forEach((ele)=>{
                event.preventDefault();
            })
            // 위치로 가기!
            scrollTo(0,hh);
            console.log(hh)
            // for of 문으로 li클릭시 모든 li의 클래스를 먼저 지워주ㄱㅣ
            for(let x of bbxli){
                x.classList.remove('on');
            }
            // 그리고 클래스부여
            ele.classList.add('on');

            // console.log(fromendpagewrap[idx])

            // for of 문으로 각 서브페이지의 문단을 초기화해줌
            for(let x of fromendpagewrap){
                x.style.display = 'none';
                x.style.opacity = 0;
                x.style.transition = 'none'
            }

            // 초기화 함과 동시에 서브페이지의 문단을 선 블럭처리를해주며 
            // 트랜지션을 줌 -> 동시에 주면 db 는 트랜지션이 안되기때문!
            fromendpagewrap[idx].style.display = 'block';
            fromendpagewrap[idx].style.transition = 'opacity .5s ease-in-out'
            setTimeout(()=>{
                fromendpagewrap[idx].style.opacity = 1;
            },300)

        }
    })

    





    // 코어 자스
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
        sitemap.classList.add("show");
        document.body.style.overflow = "hidden";
    };

    // 사이트맵에 버튼클릭시 사이트맵에 클래스 on 빼기
    stb.onclick = () => {
        sitemap.classList.remove("show");
        document.body.style.overflow = "visible";
    };
    // 완료 !
    // 사이트맵 버튼 이동 끝 ///////////////////////////////////













}); // 로딩구역 ////