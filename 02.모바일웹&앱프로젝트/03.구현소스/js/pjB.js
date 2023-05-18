
// 프로젝트 뿌려주기
function pjB(){
    console.log('pj뿌리기')
    
    $('html,body').animate({scrollTop : '0px'})
    // 서브페이지 함수구역 - 프로젝트 뿌려주는부분
    // 큰그림 아래에서 위로오게 클래스on주기
    console.log($('.bigpicture'))
    $('.bigpicture').addClass('on')
    // 큰그림 커지는효과
    $('.bigpicture').css({
        transition : '2s linear',
        transform : 'scale(1)',
    })
    // 큰그림 밑에 글씨를 리플레이스해서 ^ -> br태그로

    let bigtxt = ""
    bigtxt = $('.tit').html()
    console.log(bigtxt)
    // $('.tit').html(bigtxt.replaceAll('^','<br>'))

    // 글씨들 다 br태그로 바꾸는 함수를 만들까 생각중 05-18
    // function txtChange(a,txt){
    //     let txt = ""
    //     txt = a.html()
    //     a.html(txt.replaceAll('^','<br>'))
    // }


    // 타이틀 샤라락 나오기
    let tit = $('.tit')
    let br = '<br>'
    // bigtxt로 따놨음
    let hcode = "";
    let idx = 0;
    // 글씨 개별 출력 bigtxt \n수정이 필요할듯
    for(let x of bigtxt){
        // if(x ==="^") x ='\n'
        hcode +=`
        <span style = "transition-delay:${idx*0.02}s;">${x}</span>
        `
        idx++
    }
    tit.html(hcode)
    // console.log(hcode)
    setTimeout(()=>{
        tit.addClass('on')
    },1000)
    
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

    // 두번째 이미지 등장씬
    // 스크롤시
    $(window).on('scroll',function(){
        console.log('하위')
    })

































   
}

export default pjB;