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
    // 로고 누르면 메인페이지로

    // p2g높이 
    let pg2h = $('.pg2').height()
    // 윈도우높이
    let winh = $(window).scrollTop();
    // p4g 높이
    let pg4hh = $('.pg4').height();
    // 이건 스크롤안해도 실행되게 -> 새로고침시 맨위로 할거면 삭제해도될듯
    if(winh >= pg2h) bobobong;
    
    // 2페이지 스크롤 되면 함수실행 글씨 뾰뵤뵤뵹
    // 2페이지의 높이가 윈도우높이의 33%가 되면
    let hhh = $(window).scrollTop()
    
    $(window).on('scroll',function(){
        // 돔 기준 pg4의 머리 까지 거리
        let pg3h = $('.pg3').offset().top
        let pg4h = $('.pg4').offset().top
        // 윈도우 스크롤높이 체크! -> 이게 밖에 전역변수로 놓으니까 안바뀜..
        hhh = $(this).scrollTop();

        
        let asdfg = pg4h/3 *2 - hhh 
        // 페이지 4의 이벤트 실행높이값
        let asdf = pg3h/3 *2 - hhh 
        console.log(asdfg , hhh)
        if(hhh >= pg2h){
            bobobong()
        }
        if (hhh >= asdfg){
            // ssgssg();
        }


        
        if( asdf <= 0 ){
            zrr();
        }

    })



    // 글씨 뾰보봉
    function bobobong(){
        // 글씨올라오기
        $('.ohbx > div').css({
            transform : 'translateY(0)'
        });

        // 글씨 올라오고 나서 뽀보보보봉하기
        setTimeout(()=>{
            $('.pg2_inlineImg img').eq(0)
            .css({
                transform : 'scale(1)',
                // opacity : '1',
                borderRadius : '0',
                transition: '.5s ease-in-out .8s'
            },400,
            setTimeout(()=>{
                $('.pg2_inlineImg img').eq(1)
                .css({
                    transform : 'scale(1)',
                    // opacity : '1',
                    borderRadius : '0',
                    transition: '.5s ease-in-out 1s'
                },400,setTimeout(()=>{
                    $('.pg2_inlineImg img').eq(2)
                    .css({
                        transform : 'scale(1)',
                        // opacity : '1',
                        borderRadius : '0',
                        transition: '.5s ease-in-out 1.2s'
                    },400,setTimeout(()=>{
                        $('.pg2_inlineImg img').eq(3)
                        .css({
                            transform : 'scale(1)',
                            // opacity : '1',
                            borderRadius : '0',
                            transition: '.5s ease-in-out 1.4s'
                        },400,setTimeout(()=>{
                            $('.pg2_inlineImg img').eq(4)
                            .css({
                                transform : 'scale(1)',
                                // opacity : '1',
                                borderRadius : '0',
                                transition: '.5s ease-in-out 1.6s'
                            },400)
                        }))
                    }))
                }))
            }))
        })
    }
    // bobobong()


    // 주르륵 텍스트 대상
    // 주루륵 한번만실행할려구
    let zrrnum = 0;
    function zrr(){

    if(zrrnum) return;
    zrrnum = 1;
    let p4li1 = $('.p4cont ul li>div').eq(0).text()
    let p4li2 = $('.p4cont ul li>div').eq(1).text()
    let p4li3 = $('.p4cont ul li>div').eq(2).text()
    let p4ull1 = $('.p4cont ul li > div').eq(0)
    let p4ull2 = $('.p4cont ul li > div').eq(1)
    let p4ull3 = $('.p4cont ul li > div').eq(2)
    let p4lip1 = $('.p4cont ul li>p').eq(0).text()
    let p4lip2 = $('.p4cont ul li>p').eq(1).text()
    let p4lip3 = $('.p4cont ul li>p').eq(2).text()
    let p4ullp1 = $('.p4cont ul li > p').eq(0)
    let p4ullp2 = $('.p4cont ul li > p').eq(1)
    let p4ullp3 = $('.p4cont ul li > p').eq(2)

    // 주르륵텍스트 1호
    function zrrtxt(a,b){
        let hcode = "";
        let idx = 0;
        for(let x of a){
            if(x === "") x= "&nbsp;";
            hcode += `
            <div style = "transition-delay:${idx*0.02}s;">${x}</div>
            `
            idx++;
            b.html(hcode)
        }
        setTimeout(()=>{
            b.addClass('on');
        },1000)
    }
    // 주르륵텍스트 2호
    function zrrtxt1(a,b){
        let hcode = "";
        let idx = 0;
        for(let x of a){
            if(x === "") x= "&nbsp;";
            hcode += `
            <div style = "transition-delay:${idx*0.02}s;">${x}</div>
            `
            idx++;
            b.html(hcode)
        }
        setTimeout(()=>{
            b.addClass('on');
        },1500)
    }
    $('.p4cont ul').css({
        transform:'translate(0)'
    })

    // 실행코드
    zrrtxt(p4li1,p4ull1);
    zrrtxt(p4li2,p4ull2);
    zrrtxt(p4li3,p4ull3);
    zrrtxt1(p4lip1,p4ullp1);
    zrrtxt1(p4lip2,p4ullp2);
    zrrtxt1(p4lip3,p4ullp3);
    setTimeout(()=>{
        $('.p4span').animate({opacity:'1'},800);
    },2000)
    } // 주르륵 함수 //

    // 슥슥슥슥 휘잉
    // 기본셋팅잡기~
    $('.pg3wrap>div').eq(0).find('img').css({
        transform:"translateX(-100%)",
    })
    $('.pg3wrap>div').eq(1).find('img').css({
        transform:"rotate(180deg)" ,
        transformOrigin : "bottom"
    })
    $('.pg3wrap>div').eq(2).find('img').css({
        transform:"translateY(-100%)",
    })
    $('.pg3wrap>div').eq(3).find('img').css({
        transform:"translateY(110%)",
    })
    $('.pg3wrap>div').eq(4).find('img').css({
        transform:"translateX(100%)",
    })

    // 슥슥슥슥 휘잉
    // 슥슥 1회만 허용
    let sgsg = 0;
    function ssgssg() {
        if(sgsg) return;
        sgsg=1;
        $('.pg3wrap>div').eq(0).find('img')
        .css({
            transition : ".5s linear",
            transform:"translateX(-0)"
        })
        $('.pg3wrap>div').eq(1).find('img')
        .css({
            transition : "1.2s ease-out 1.5s",
            transform:"rotate(360deg)",
            borderRadius : "0"
        })
        $('.pg3wrap>div').eq(2).find('img')
        .css({
            transition : ".5s linear .7s",
            transform:"translateX(-0)"
        })
        $('.pg3wrap>div').eq(3).find('img')
        .css({
            transition : ".5s linear 1.2s",
            transform:"translateX(-0)"
        })
        $('.pg3wrap>div').eq(4).find('img')
        .css({
            transition : ".5s linear .4s",
            transform:"translateX(-0)"
        })

        $('.pg3_centertext span').css({
            // opacity : '0',
            transform : 'translateY(0%)',
            display : 'inline-block',
            transition : '1s 3s'
        })
        setTimeout(()=>{
            $('.pg3_lefttext_ro').addClass('on')
        },3000)

    }

    // setTimeout(ssgssg,500)

    // 슥슥슥 기본셋팅잡기
    $('.pg3_centertext span').css({
        // opacity : '0',
        transform : 'translateY(190%)',
        display : 'inline-block'
    })



}); // JQB