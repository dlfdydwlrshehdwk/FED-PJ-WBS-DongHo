window.addEventListener("DOMContentLoaded",()=>{

    setTimeout(()=>{
        window.scrollTo(0,0);
    },100) // 작동완료

// 셀렉터 변수화
const qs = x =>document.querySelector(x);
const qsa = x => document.querySelectorAll(x);
    // console.log("로딩완료");

// 마우스 휠로 페이지 이동

// 변수 설정하기
// 전체 페이지 변수
let pgnum = 0; //현재 페이지 번호(첫페이지 0)
// 전체 페이지 수
const pgcnt = qsa('.page').length; //6개!
// console.log(pgcnt)
// 광스크롤 금지 변수
let prot_sc = 0;

// 휠이벤트설정
window.addEventListener('wheel',wheelFn,{passive:false});

// 휠 이벤트 함수 만들기
function wheelFn(e){
    // 기본기능 멈추기
    event.preventDefault();

    // 광스크롤 막기
    if(prot_sc === 1) return;
    prot_sc =1;
    setTimeout(()=>prot_sc = 0,800);
    
    // console.log('휠 확인')
    // 휠 방향 알아내기
    // 이벤트객체.wheelDelta
    let dir = e.wheelDelta; //위120 아래 -120

    // 방향에 따른 페이지 번호 증감
    // 페이지 밑방향 : 페이지 번호 증가
    if(dir<0){
        pgnum++;
        // 한계수 지정 총페이지수 -1
        if(pgnum > pgcnt -1) pgnum = pgcnt-1;
        // console.log('pgnum:',pgnum, '\npgcnt:',pgcnt)
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
} // wheel 이벤트 ////

// 함수명 updatePg
// 기능 페이지 이동 설정값 업데이트

function updatePg() {
    console.log('페이지이동')
    // 페이지 이동하기
    // scrollTO(가로,세로)
    window.scrollTo(0,window.innerHeight*pgnum);
    // 세로 이동위치 : 윈도우 높이값* 페이지 번호

    // 페이지 이동후 해당 페이지액션
    // pageAction 함수호출 (페이지이동 시차를 준다.)
    setTimeout(()=>pageAction(pgnum),500)
}//updatePg 함수 ////


/* 
    함수명 : initCSS
    기능 : 글자 애니메이션 초기값 셋팅
*/

















// 구현내용 
// h1 p 태그 들을 각글자를 하나씩 아래서 위로 올라오기
// 대상 stage1
const s1 = qs('.stage1');
const stage =qs('.stage');
const s2 = qs('.stage2');
const h1 = ["BUSINESS","About FESCARO","Partnership","Contact us"] // 데이터저장변수
const p = [
    "페스카로는 자동차 사이버보안 전문기업에서\n 자동차 전장 SW전문기업으로 확장하여\n 미래차에 필요한 모든 솔루션을 선도합니다.",
    "내연기관차부터 전기차,자율주행차까지 전문경험과 노하우를\n 바탕으로 미래차 산업의 혁신을 주도합니다.",
    "페스카로는 기술력과 안정성, 신뢰성을 바탕으로\n글로벌 OEM, Tier, Chip사와 함께하고 있습니다.",
    "문의사항을 남겨주시면\n빠른 시일 내에 연락을 드리겠습니다.",
]

let hcode = "" // 코드 저장변수
let pcode = "" // p 저장변수
let idx = 0; //순번변수
let pidx = 0; 

for(let x of h1[0]){
    // console.log(x)
    if(x === " ") x= "&nbsp;";
    hcode +=`
    <h1 style = "transition-delay:${idx*0.05}s">${x}</h1>
    `;

    idx++;
    // console.log(x)
}
for(let x of p[0]){
    if(x === " ") x = "&nbsp;";
    pcode +=`
    <p style = "transition-delay:${pidx*0.05}s">${x}</p>
    `;
    pidx++;
}



s1.innerHTML = hcode;
s2.innerHTML = pcode;

setTimeout(()=>{stage.classList.add("on");},2000)














/* 
    함수명 : pageAction
    기능 : 페이지별 액션주기
*/

function pageAction(seq) {
    console.log('액션',seq)

    // 변경대상 
    // 페이지2의 textarea
    const p2tarea = qs('.page2 .txtarea')
    // console.log(p2tarea)

    // 해당 페이지 액션주기
}
























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
    sitemap.classList.add("on");
};

// 사이트맵에 버튼클릭시 사이트맵에 클래스 on 빼기
stb.onclick=()=>{
    sitemap.classList.remove("on");
}

// 사이트맵 버튼 이동 끝


});//로드구역 ///