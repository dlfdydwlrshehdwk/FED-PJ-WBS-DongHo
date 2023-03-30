// 페스카로 subpage business JS  sub_business.js 

// 셀렉터 변수화
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);


window.addEventListener('DOMContentLoaded',()=>{
    // 변수 모음
    // - 1페이지 맨밑의 .bbx 박스 에 li들 
    const bbxli = qsa('.bbx ul>li');

    // 밑에 박스
    const bbx = qs('.bbx');
    console.log(bbx)
    
    // - 서브페이지의 2번째페이지부터 끝까지 가는 랩핑박스
    // .business_sub_1~4 까지 4개가있다. 4개는 dn + opacity 0 상태
    const fromendpagewrap = qsa('.fromendpagewrap')


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
    

    // 페이지 1의 li를 누르면 ~~
    // bbxli.forEach((ele))
    const he = qs('.bbx ul').innerheight;
    console.log(he)
    

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
            console.log(bbxli)
            // for of 문으로 li클릭시 모든 li의 클래스를 먼저 지워주ㄱㅣ
            for(let x of bbxli){
                x.classList.remove('on');
            }
            // 그리고 클래스부여
            ele.classList.add('on');

            console.log(fromendpagewrap[idx])

            // for of 문으로 각 서브페이지의 문단을 초기화해줌
            for(let x of fromendpagewrap){
                x.style.display = 'none';
                x.style.opacity = 0;
                x.style.transition = 'none'
            }

            // 초기화 함과 동시에 서브페이지의 문단을 선 블럭처리를해주며 
            // 트랜지션을 줌 -> 동시에 주면 db 는 트랜지션이 안되기때문!
            fromendpagewrap[idx].style.display = 'block';
            fromendpagewrap[idx].style.transition = 'opacity .3s ease-in'
            setTimeout(()=>{
                fromendpagewrap[idx].style.opacity = 1;
            },300)

        }
    })



















}); // 로딩구역 ////