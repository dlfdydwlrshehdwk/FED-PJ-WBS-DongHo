$(()=>{ // JQB

    console.log('hi')

    // 기능구현해야할 리스트
    /* 
        1페이지에서 마우스를 이동시 
        글귀들이 skew되며 마우스가 이동한방향으로 흘러감
        + 기본적으로 자동으로 흘러감 

        2. 찌글찌글에 마우스 오버시 동영상화면이 나오면서 실행
        오버아닐시 동영상 멈춤 + 찌글찌글

        2페이지부터 갈시 보이는 페이지의 화면이 2/3 정도가 되면 
        글씨 등장 
        + 글씨 등장이 좀 다양하고 귀여운데 이건 
    */

    // 로고 누르면 메인페이지로
    $('.logo').css({
        position:'relative' ,
        zIndex : 1,
    })
    $('.logo').click(()=>{
        console.log('로고')
        $(location).attr("href","index.html")
    })

    $('.navlist ul').find('li').eq(2).click(()=>{
        console.log('로그인')
        $('.loginbg').fadeIn()
    })
    $('.close').click(function(){
        $('.loginbg').fadeOut()
    })

}); // JQB