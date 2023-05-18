// 프로젝트 뿌려주기
function pjB() {
    console.log("pj뿌리기");

    // 화면위로가기!
    $("html,body").animate({ scrollTop: "0px" });

    // 스크롤 이벤트
    function scroll(){ // -> window안됨 , .modal 기준 됨 o 
        $('.modal').on('scroll', function(){
            // console.log('안녕')

        // 대상들
        let tga = $('.mdsizewrap')
        let tgb = $('.bigpicture2wrap')
        let tgc = $('.img50txt50wrap')
        let tgd = $('.colorbgwrap')
        let tge = $('.nextPRwrap')
        // 윈도크기의 반
        let winH2 = $(window).height()/2
        console.log($(window).height()/2)
        // a에서 tga 돔기준값
        let tgaP = tga.offset().top
        let tgbP = tgb.offset().top
        let tgcP = tgc.offset().top
        let tgdP = tgd.offset().top
        let tgeP = tge.offset().top
        
        // console.log(tgbP)

        if(tgaP <= winH2) tga.addClass('on');
        if(tgbP <= winH2) $('.bigpicture2').addClass('on');
        if(tgcP <= winH2) tgc.addClass('on');
        if(tgdP <= winH2) tgd.addClass('on');
        if(tgeP <= winH2) tge.addClass('on');




















        })
    }
    scroll();

    // 큰그림 아래에서 위로오게 클래스on주기
    $(".bigpicture").addClass("on");

    // 큰그림 커지는효과
    $(".bigpicture").css({
        transition: "2s linear",
        transform: "scale(1)",
    });

    // 큰그림 밑에 글씨를 리플레이스해서 ^ -> br태그로
    let bigtxt = "";
    bigtxt = $(".tit").html();
    // $('.tit').html(bigtxt.replaceAll('^', '<br>'))

    // 타이틀 샤라락 나오기
    let tit = $(".tit");

    let hcode = "";
    let idx = 0;

    // 글씨 개별 출력 bigtxt <br>이 안먹던것을
    // 조건문을통해 x를 발견시 hcode에 x = <br> 변수를 +=로 넣고 else로
    // 나머지 글자를 넣는 방식으로 하였다.
    for (let x of bigtxt) {
        if (x === "^") {
            x = "<br>";
            hcode += x;
        }
        // console.log(x);
        else {
            hcode += `
                <span style = "transition-delay:${idx * 0.02}s;">${x}</span>`;
        }

        idx++;
    }
    // tit에 잘라넣은 글씨 hcode를 넣어주세요
    tit.html(hcode);

    // 1초뒤 (화면전환 애니가 돌아가는시간(넣을예정)) 클래스를 주어 애니메이션
    setTimeout(() => {
        tit.addClass("on");
    }, 1000);

    // 스몰텍스트 br처리
    let stxt = $('.mdsizetxt').text();
    $('.mdsizetxt').html(stxt)

    // 반그림 반글 텍스트 br태그 처리
    let htxt = $('.img50txt50_txtbx').text()
    $('.img50txt50_txtbx').html(htxt)


    // 칼라데이터 텍스트 br태그 처리
    // let ctxt = $('.colorbg h2').text()
    // $('.colorbg h2').html(ctxt)

    // 타이틀 샤라락 나오기
    // 뿌려야되는곳 칼라박스의 h2
    let tit2 = $(".colorbg h2");
    // 뿌려야하는것
    let colortxt = $(".colorbg h2").text()

    let hcode2 = "";
    let idx2 = 0;

    // 글씨 개별 출력 bigtxt <br>이 안먹던것을
    // 조건문을통해 x를 발견시 hcode에 x = <br> 변수를 +=로 넣고 else로
    // 나머지 글자를 넣는 방식으로 하였다.
    for (let x of colortxt) {
        if (x === "^") {
            x = "<br>";
            hcode2 += x;
        }
        // console.log(x);
        else {
            hcode2 += `
                <span style = "transition-delay:${idx2 * 0.02}s;">${x}</span>`;
        }

        idx2++;
    }
    // tit에 잘라넣은 글씨 hcode를 넣어주세요
    tit2.html(hcode2);


    // 넥스트 프로젝트 간지나게 촤르륵

    // 뿌려야하는곳
    let tit3 =$('.nextPRtxt');
    // 뿌려야하는것
    let nexttxt = $('.nextPRtxt').text();
    // 담을공간
    let hcode3 = "";
    // 증가할 변수
    let idx3 = 0;
    for (let x of nexttxt){
        if (x === "^") {
            x = "&nbsp";
            hcode3 += x;
        }
        // console.log(x);
        else {
            hcode3 += `
                <div style = "transition-delay:${idx3 * 0.01}s;">${x}</div>`;
        }
        idx3++;
    }
    // 이곳에 잘라넣은 글씨 hcode를 넣어주세요
    tit3.html(hcode3);

    $('.nextPRtxt').on('click', function(){
        // clip-path: ellipse(100% 120% at 50% 100%);
        $('.nextPRimgbx').animate({
            clipPath: 'ellipse(100% 120% at 50% 100%)'
        },400)
    })



























    // 글씨 자르는거 예시/
    // function zrrtxt(a,b){
    //     let hcode = "";
    //     let idx = 0;
    //     for(let x of a){
    //         if(x === "") x= "&nbsp;";
    //         hcode += `
    //         <div style = "transition-delay:${idx*0.02}s;">${x}</div>
    //         `
    //         idx++;
    //         b.html(hcode)
    //     }
    //     setTimeout(()=>{
    //         b.addClass('on');
    //     },1000)
    // }

}

export default pjB;
