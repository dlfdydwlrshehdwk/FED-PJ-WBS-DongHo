//  공통 JS : common.js

logo();


// 로고관련
function logo(){
    console.log('공통이다.')
    // 로고 누르면 메인페이지로
    $('.logo').css({
        position:'relative' ,
        zIndex : 1,
    })
    $('.logo').click(function(){
        // 1. 흰원에 클래스 on주기
        $('.whiteone').addClass('on');

        // let a = $(this).className
        // console.log(a)
        // 2. 애니메션션후 서브페이지로 이동하기
        setTimeout(()=>{
            location.href='index.html';
        },1200)

        
        // $(location).attr("href","index.html")
        // setTimeout(()=>{
        //     location.href=a+'.html';
        // },1200)

    })

    $('.navlist ul').find('li').eq(2).click(()=>{
        console.log('로그인')
        $('.loginbg').fadeIn()
    })
    $('.close').click(function(){
        $('.loginbg').fadeOut()
    })
    // 로고 누르면 메인페이지로
}