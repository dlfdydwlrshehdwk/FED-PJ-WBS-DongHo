// 프로젝트 뿌려주기
function pjB() {
    console.log("pj뿌리기");

    // 화면위로가기!
    $("html,body").animate({ scrollTop: "0px" });


    function scroll(){ // -> window안됨 , .modal 기준 됨 o 
        $('.modal').on('scroll', function(){
            console.log('안녕')
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
    setTimeout(()=>{
        $('.mdsizewrap').addClass('on')
    },10)





























    

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
