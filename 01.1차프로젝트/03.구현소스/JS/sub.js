// 페스카로 subpage business JS  sub_business.js 

// 셀렉터 변수화
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
window.addEventListener('DOMContentLoaded',()=>{


    const gg = document.querySelector('.bbx').clientHeight;
    const spg1bg = qs('.spage1bg');
    // 2페이지부터 랩핑박스
    const fromendpagewrap = qsa('.fromendpagewrap')
    // 변수 모음
    qs('.upbtn').style.zindex= 99999;
    console.log(window.innerHeight - gg)
    // 윈도우에 스크롤을갈굼
    //  측정이안되었던이유 = 휠질하고 스크롤y를 초기화를 안해줘서 그런듯
    



        window.addEventListener('wheel',()=>{
            let wa = event.wheelDelta;
            // 휠 내릴때 
            // 글자 사라지고 nav바 만 적용되있음
            if(wh<450 && wa >=-110){
                console.log('안녕')
                qs('.h2wrap').classList.add("on");
                qs('.pwrap').classList.add("on");
                spg1bg.classList.add('sm');
                fromendpagewrap.forEach((ele)=>{
                    ele.classList.remove('up');
                })
            } //if ///
            // 휠 올릴때 
            // 글자 사라지고 nav바 만 적용되있음
            else if(wh>250 && wa <= 110){
                console.log('?')
                qs('.h2wrap').classList.remove("on");
                qs('.pwrap').classList.remove("on");
                spg1bg.classList.remove('sm');
                fromendpagewrap.forEach((ele)=>{
                ele.classList.add('up')
            })
            } // else if ////

            
        }) ///  휠 ///

        let wh = window.scrollY;
    window.onscroll = () =>{
        // 이거하고나니 제대로 작동함
        wh = window.scrollY
        // console.log('hi')
        console.log(wh)
        if(wh>window.innerHeight - gg){
            qs('.bbx').classList.remove('on');
            setTimeout(()=>{
                qs('.bbx').style.position = 'fixed';
                qs('.bbx').style.top = 0;
                qs('.bbx').classList.add('fixed');
            },10)
        }
        else{
            qs('.bbx').classList.add('on');
                qs('.bbx').style.position = 'absolute';
                qs('.bbx').style.transition = ' none';
                qs('.bbx').style.bottom = '';
                qs('.bbx').style.top = '';
                qs('.bbx').classList.remove('fixed');
        }

        if( wh > window.innerHeight - gg) {
            qs('.h2wrap').classList.remove("on");
                qs('.pwrap').classList.remove("on");
                spg1bg.classList.remove('sm');
                fromendpagewrap.forEach((ele)=>{
                ele.classList.add('up')
            })
        }
        else {
            qs('.h2wrap').classList.add("on");
                qs('.pwrap').classList.add("on");
                spg1bg.classList.add('sm');
                fromendpagewrap.forEach((ele)=>{
                    ele.classList.remove('up');
                })
        }
        
        // bbx를 고정하고 해제하고싶은데 아이디어가
        // console.log(hh)
        // if(wh >750){
        //     console.log('안냥')
        //     qs('.bbx').classList.remove('on');
        //     setTimeout(()=>{
        //         qs('.bbx').style.position = 'fixed';
        //         qs('.bbx').style.top = 0;
        //         qs('.bbx').style.zindex = 9999;
        //         qs('.bbx').classList.add('fixed');
        //     },10)
        // }
        // else if(wh>150 ){
        //     qs('.bbx').classList.add('on');
        //     setTimeout(()=>{
        //         qs('.bbx').style.position = 'absolute';
        //         qs('.bbx').style.bottom = '-10%';
        //         qs('.bbx').style.zindex = 9999;
        //         qs('.bbx').style.top = '';
        //         qs('.bbx').classList.remove('fixed');
        //     },10)
        // }
    }

    // 새로고침시 화면맨위로설정
    setTimeout(()=>{
        window.scrollTo(0,0);
    },100) // 작동완료
    // nav 바 - 서브에서는 fixed가 아닌 상태
    const nav = qs('.nav')
    nav.style.position = 'absolute';

    // 1페이지 배경 
    
    setTimeout(()=>{
        spg1bg.classList.add('sm');
    },3000)

    // - 1페이지 맨밑의 .bbx 박스 에 li들 
    const bbxli = qsa('.bbx ul>li');

    // 밑에 박스
    const bbx = qs('.bbx');
    console.log(bbx.clientHeight)
    
    // 위치값 이동용변수모음
    const he = qs('.bbx ul');
    // ul자체크기
    const qq = he.scrollHeight;  // -> 81 he 의 높이값
    // 전체높이
    const ww = window.innerHeight;
    // 전체높이에서 ul크기 뺴서 거기로 가기
    const hh = ww - qq;
    console.log(window.innerHeight)
    console.log('qq:',qq,'ww',ww,'hh',hh)
    
    // 서브페이지 휠 사용시 위한 1페이지 변수
    const spg1 = qs('.spage1')
    console.log(spg1)

    

    // 광스크롤 금지 변수
    let prot_sc = 0;



    //  쓰던거

    spg1.addEventListener('wheel',()=>{
        // 기본기능을 정지
        // event.preventDefault();
        console.log('...')
        // 광클방지
        if(prot_sc === 1) return;
        prot_sc = 1;
        setTimeout(()=>{
            prot_sc = 0;
        },400)
        // 휠방향 알아내기
        let wa = event.wheelDelta;
        
        console.log(wa) // 밑 = -120 위 120
        // console.log('hi');
        let scb = document.querySelector('main').scrollTop;
        // 스크롤 내릴떄
        if(wa >= -120 && wa <0){
            console.log('왜안됌')
            scrollTo(0,hh);
            qs('.h2wrap').classList.remove("on");
            qs('.pwrap').classList.remove("on");
            spg1bg.classList.remove('sm');
            fromendpagewrap.forEach((ele)=>{
                console.log(ele)
                ele.classList.add('up')
            })
        }
        // 올릴떄
        else if(wa > 0  && wa <= 120){
            scrollTo(0,0)
            qs('.h2wrap').classList.add("on");
            qs('.pwrap').classList.add("on");
            spg1bg.classList.add('sm');
            fromendpagewrap.forEach((ele)=>{
                ele.classList.remove('up')
            })
        }
    })

    // 쓰던거


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
                // qsa('.bbx ul>li').forEach((ele)=>{
                //     console.log(ele.classList.contains('on'));
                // })
                // on을 가지고있는 녀석은 안꿈틀거리게 하고싶은데
                // 현재는 on되어있는 li를 누르면 꿈틀함
                x.classList.remove('on');
            }
            // 그리고 클래스부여
            ele.classList.add('on');

            // console.log(fromendpagewrap[idx])

            // for of 문으로 각 서브페이지의 문단을 초기화해줌
            for(let x of fromendpagewrap){
                x.style.display = 'none';
                x.classList.remove('up');
                // x.style.opacity = 0;
                // x.style.transition = 'none'
                // x.style.transform = 'translateY(4%)'
                console.log(x)
            }

            // 초기화 함과 동시에 서브페이지의 문단을 선 블럭처리를해주며 
            // 트랜지션을 줌 -> 동시에 주면 db 는 트랜지션이 안되기때문!
            fromendpagewrap[idx].style.display = 'block';
            fromendpagewrap[idx].style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out'
            setTimeout(()=>{
                fromendpagewrap[idx].classList.add('up');
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
    // btn.onclick = () => {
    //     // console.log(btn);
    //     sitemap.classList.add("show");
    //     document.body.style.overflow = "hidden";
    // };

    // // 사이트맵에 버튼클릭시 사이트맵에 클래스 on 빼기
    // stb.onclick = () => {
    //     sitemap.classList.remove("show");
    //     document.body.style.overflow = "visible";
    // };
    // 완료 !
    // 사이트맵 버튼 이동 끝 ///////////////////////////////////

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
        // pgnum = 0;
        // 페이지0으로 가기
        window.scrollTo(0, 0);
        // scrollTo(0,0)
            qs('.h2wrap').classList.add("on");
            qs('.pwrap').classList.add("on");
            spg1bg.classList.add('sm');
            fromendpagewrap.forEach((ele)=>{
                ele.classList.remove('up')
            })
        // qs(".ctbtn").classList.remove("on");
        // qsa(".nav>ul>li>a").forEach((ele) => {
        //     ele.style.color = "white";
        // });
        // // nav 로고 이미지 색변경
        // qsa(".logo img")[0].classList.add("on");
        // qsa(".logo img")[1].classList.remove("on");
        // // 탭버튼 색변경
        // qs(".tbtn").style.color = "white";
        // // pgnum 0으로 교체
    };
    // 완료 !
    // 위로가는 화살표 버튼 끝 /////////////////////////////////

    const navul = qs(".nav ul");
    // logo img [0]백 [1]흑 on주면 등장
    const logoimg = qsa(".logo img");
    navul.onmouseenter = () => {
        console.log("hi");
            qsa(".nav ul>li>a").forEach((ele) => {
                ele.style.color = "black";
            });
            logoimg[0].classList.remove("on");
            logoimg[1].classList.add("on");
            qs(".tbtn").style.color = "#333";}

            navul.onmouseleave = () => {
                console.log("hi");
                    setTimeout(() => {
                        qsa(".nav ul>li>a").forEach((ele) => {
                            ele.style.color = "white";
                        });
                        logoimg[1].classList.remove("on");
                        logoimg[0].classList.add("on");
                        qs(".tbtn").style.color = "white";
                    }, 200);}









}); // 로딩구역 ////