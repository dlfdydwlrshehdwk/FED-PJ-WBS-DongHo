



window.addEventListener("DOMContentLoaded",()=>{

    // 새로고침시 화면맨위로설정
    // setTimeout(()=>{
    //     window.scrollTo(0,0);
    // },100) // 작동완료

// 셀렉터 변수화
const qs = x =>document.querySelector(x);
const qsa = x => document.querySelectorAll(x);



// 데이터저장변수
const h1 = ["BUSINESS","About FESCARO","Partnership","Contact us"] 

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
    const pgcnt = qsa('.page').length; //6개!
    // 광스크롤 금지 변수
    let prot_sc = 0;

    const page = qsa('.page');
    // 대상 page on주면 애니메이션
    // const page = qsa('.page');
    // 각 h1태그 출력칸
    const s1 = qs('.stage1');
    const s3 = qs('.stage3');
    const s4 = qs('.stage4');
    const s5 = qs('.stage5');






// 휠이벤트설정
window.addEventListener('wheel',wheelFn,{passive:false});

// 휠 이벤트 함수 만들기
function wheelFn(e){
    // 기본기능 멈추기
    e.preventDefault();

    // 광스크롤 막기
    if(prot_sc === 1) return;
    prot_sc =1;
    setTimeout(()=>prot_sc = 0,800);
    
    // 휠 방향 알아내기
    // 이벤트객체.wheelDelta
    let dir = e.wheelDelta; //위120 아래 -120

    // 방향에 따른 페이지 번호 증감
    // 페이지 밑방향 : 페이지 번호 증가
    if(dir<0){
        pgnum++;
        // 한계수 지정 총페이지수 -1
        if(pgnum > pgcnt -1) pgnum = pgcnt-1;
    } // if 문 ////

    // 스크롤 윗뱡향 : 페이지 번호 감소
    else {
        pgnum -- ;
        // 한계수 : 페이지 첫번호 인 0
        if(pgnum<0){
            pgnum = 0;
        }
    }//else ////
    console.log('페이지버놓',pgnum)
    updatePg();
    // updatePg(indic);
} // wheel 이벤트 ////


// 함수명 updatePg
// 기능 페이지 이동 설정값 업데이트

function updatePg() { // obj - 변경할 메뉴전체 객체
    console.log('업데이트')
    // 페이지 이동하기
    // scrollTO(가로,세로)
    window.scrollTo(0,window.innerHeight*pgnum);
    // 세로 이동위치 : 윈도우 높이값* 페이지 번호

    page.forEach((ele)=>{
        ele.classList.remove('on');
        // console.log(ele)
    })
    page[pgnum].classList.add('on');

    console.log(page[pgnum])
    // 페이지 이동후 해당 페이지액션
    // pageAction 함수호출 (페이지이동 시차를 준다.)
    // setTimeout(()=>pageAction(pgnum),500)
}//updatePg 함수 ////




// 각 페이지마다 맞는 내용 한글자씩 설정된 함수들
// 페이지2텍스트 함수
function p2h1txt() {
    let hcode = "" // 코드 저장변수
    let idx = 0; //순번변수
    
    for(let x of h1[0]){
        if(x === " ") x= "&nbsp;";
        hcode +=`
        <h1 style = "transition-delay:${idx*0.02}s">${x}</h1>
        `;
    
        idx++;
    }
    s1.innerHTML = hcode;
}
// 페이지3 텍스트함수
function p3h1txt() {
    let hcode = "" // 코드 저장변수
    let idx = 0; //순번변수
    
    for(let x of h1[1]){
        if(x === " ") x= "&nbsp;";
        hcode +=`
        <h1 style = "transition-delay:${idx*0.02}s">${x}</h1>
        `;
    
        idx++;
        
    }
    s3.innerHTML = hcode;
}
// 페이지4 텍스트함수
function p4h1txt() {
    let hcode = "" // 코드 저장변수
    let idx = 0; //순번변수
    
    for(let x of h1[2]){
        if(x === " ") x= "&nbsp;";
        hcode +=`
        <h1 style = "transition-delay:${idx*0.02}s">${x}</h1>
        `;
    
        idx++;
    }
    s4.innerHTML = hcode;
}
// 페이지5 텍스트함수
function p5h1txt() {
    let hcode = "" // 코드 저장변수
    let idx = 0; //순번변수
    
    for(let x of h1[3]){
        if(x === " ") x= "&nbsp;";
        hcode +=`
        <h1 style = "transition-delay:${idx*0.02}s">${x}</h1>
        `;
    
        idx++;
    }
    s5.innerHTML = hcode;
}

// function h1txt () {
//     let hcode =""
//     let idx = 0;
//     for(let i =0; i<4; i++){
//         for(let x of h1[i]){
//             if(x ==="") x="&nbsp;";
//             hcode +=`
//             <h1 style = "transition-delay:${idx*0.02}s">${x}</h1>
//             `;
//             idx++;
//         }
//         qsa('.stage').forEach((ele)=>{ele.innerHTML = hcode;})
//     }
// }
// h1txt();
// 각 글자 한글자씩 출력해주는거 일단실행 opacity0처리되어있음
// page에 클래스 on주면 애니메이션있음
p2h1txt();
p3h1txt();
p4h1txt();
p5h1txt();



// 페이지 2 인터벌

// 대상 .bx3 ul
const p2slide = qs('.bx3slide')
console.log(p2slide)
// 기능 : 일정시간마다 왼쪽으로 -39%씩이동
// 화살표를 누르면 맨끝사진을 다른맨끝으로 잘라서 넣은 후 방향에 맞게 이동






































// 사이트맵 버튼 이동 시작

// 메인페이지 버튼
btn = qs(".btn");
// 사이트맵
sitemap = qs(".sitemap");
// 사이트맵 버튼
stb = qs(".sitemap_btn");

// 메인페이지 버튼누를시 사이트맵에 클래스 on 추가
btn.onclick = ()=>{
    // console.log(btn);
    sitemap.classList.add("show");
};

// 사이트맵에 버튼클릭시 사이트맵에 클래스 on 빼기
stb.onclick=()=>{
    sitemap.classList.remove("show");
}

// 사이트맵 버튼 이동 끝


});//로드구역 ///