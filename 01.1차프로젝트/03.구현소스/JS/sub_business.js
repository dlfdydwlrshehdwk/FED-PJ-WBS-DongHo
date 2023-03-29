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
    // window.location.reload();
    document.querySelector(".nav").classList.add("on");
    bbx.classList.add("on");
    const asdf = document.querySelector('.h2wrap h2').innerHTML;
    let hcode = ""
    let idx = 0;
    for(let x of asdf) {
        console.log(x);
        hcode +=`
                <h2 style = "transition-delay:${idx*0.02}s">${x}</h2>
                `;
        idx++;
    } // for ////
    qs('.h2wrap').innerHTML = hcode;

    // 새로고침시 화면맨위로설정
    setTimeout(()=>{
        window.scrollTo(0,0);
    },100) // 작동완료
    document.querySelector(".nav").classList.add("on");
    bbx.classList.add("on");
    
    

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