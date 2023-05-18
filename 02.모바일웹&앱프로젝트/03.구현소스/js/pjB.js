
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
    $('.tit').html(bigtxt.replaceAll('^','<br>'))

    // 글씨들 다 br태그로 바꾸는 함수를 만들까 생각중 05-18
    // function txtChange(a,txt){
    //     let txt = ""
    //     txt = a.html()
    //     a.html(txt.replaceAll('^','<br>'))
    // }


    // 타이틀 샤라락 나오기
    let tit = $('.tit')
    console.log(tit)


































    // let zxc = $('.tit span')
    // let dsa = zxc.eq(0).text()
    // let dsa2 = zxc.eq(1).text()
    // let dsa3 = zxc.eq(2).text()
    // // console.log(dsa)

    // // 맨위에 그림 두둥! 하고 등장하기
    // hcode(dsa,$('.tit'),dsa2,dsa3)
    // setTimeout(()=>{
    //     $('.tit').addClass('on')
    // },10)
    // // hcode(dsa2,$('.tit'))
    // // hcode(dsa3,$('.tit'))

    // function hcode(a,b,c,d){    
    //     let hcode = ""
    //     let idx = 0;
    //     for(let x of a){
    //         if(x === "") x= "&nbsp;";
    //         console.log(x)
    //         hcode += `
    //         <span style="transition-delay:${1+idx*0.015}s;">${x}</span>
    //         `
    //         idx++;
    //     }
    //     hcode += `<br>`
    //     for(let x of c){
    //         if(x === "") x= "&nbsp;";
    //         console.log(x)
    //         hcode += `
    //         <span style="transition-delay:${1+idx*0.015}s;">${x}</span>
    //         `
    //         idx++;
    //     }
    //     hcode += `<br>`
    //     for(let x of d){
    //         if(x === "") x= "&nbsp;";
    //         console.log(x)
    //         hcode += `
    //         <span style="transition-delay:${1+idx*0.015}s;">${x}</span>
    //         `
    //         idx++;
    //     }
    //     hcode += `<br>`
        
    //     b.html(hcode)
    // }


    // console.log(hcode)
}

export default pjB;