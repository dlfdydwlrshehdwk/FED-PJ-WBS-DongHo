// 페스카로 subpage business JS  sub_business.js 

// 셀렉터 변수화
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);


window.addEventListener('DOMContentLoaded',()=>{
    // 변수 모음
    // - 1페이지 맨밑의 .bbx 박스 에 li들 
    const bbxli = qsa('.bbx ul>li');
    
    // - 서브페이지의 2번째페이지부터 끝까지 가는 랩핑박스
    // .business_sub_1~4 까지 4개가있다. 4개는 dn + opacity 0 상태
    const fromendpagewrap = qsa('.fromendpagewrap')
    

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
            for(let x of fromendpagewrap){
                x.style.display = 'none';
                x.style.opacity = 0;
                x.style.transition = 'none'

            }
            fromendpagewrap[idx].style.display = 'block';
            setTimeout(()=>{
                fromendpagewrap[idx].style.transition = 'opacity .3s ease-in'
                fromendpagewrap[idx].style.opacity = 1;
            },300)

        }
    })



















}); // 로딩구역 ////