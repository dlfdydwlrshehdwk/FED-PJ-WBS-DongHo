$(()=>{ // JQB

    startSS();
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
    
    $(window).on('scroll touchstart',function(){
        // 돔 기준 pg4의 머리 까지 거리
        let pg3h = $('.pg3').offset().top;
        let pg4h = $('.pg4').offset().top;
        // 윈도우 스크롤높이 체크! -> 이게 밖에 전역변수로 놓으니까 안바뀜..
        hhh = $(this).scrollTop();

        
        let asdfg = pg4h/3 *2 - hhh 
        // 페이지 4의 이벤트 실행높이값
        let asdf = pg3h/3 *2 - hhh 
        console.log(asdfg , hhh)
        // 2번째 페이지 액션실행
        if(hhh >= pg2h){
            bobobong()
        }
        // 3번째 페이지 액션실행
        if (hhh >= asdfg){
            ssgssg();
        }
        // 4번째 페이지 액션실행
        // if (hhh>=asdf){
        //     ziingziing();
        // }


        
        if( asdfg <= -100 ){
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
        // 1회만 실행하기
        if(sgsg) return;
        sgsg=1;

        // 왼쪽박스
        $('.pg3wrap>div').eq(0).find('img')
        .css({
            transition : ".5s linear",
            transform:"translateX(-0)"
        })
        // 큰박스
        $('.pg3wrap>div').eq(1).find('img')
        .css({
            transition : "1.2s ease-out 1.5s",
            transform:"rotate(360deg)",
            borderRadius : "0"
        })
        // 세번째박스
        $('.pg3wrap>div').eq(2).find('img')
        .css({
            transition : ".5s linear .7s",
            transform:"translateX(-0)"
        })
        // 밑박스
        $('.pg3wrap>div').eq(3).find('img')
        .css({
            transition : ".5s linear 1.2s",
            transform:"translateX(-0)"
        })
        // 맨오른쪽박스
        $('.pg3wrap>div').eq(4).find('img')
        .css({
            transition : ".5s linear .4s",
            transform:"translateX(-0)"
        })

        // 가운데 글씨문구 액션
        $('.pg3_centertext span').css({
            // opacity : '0',
            transform : 'translateY(0%)',
            display : 'inline-block',
            transition : '1s 3s'
        })
        // 맨아래 글씨문구 액션
        $('.pg3_bttext_wrap').css({
            opacity : '1',
            transform:'translateX(0%)',
            transition : '1s 3s'
        })
        // 버튼들 액션
        $('.pg3_btns>div').css({
            opacity : '1',
            transform : 'translateY(0%)',
            transition : '1s 3.5s'
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

    // 글씨를 잘라낼수도있다고 생각해서 배열화를 시놔놔버림
    let by = ['V','I','T','A','&nbsp;','A','R','C','H','I','T','E','C','T','U','R','E','&nbsp;']
    let by2 = ['V','I','T','A','&nbsp;','A','R','C','H','I','T','E','C','T','U','R','E','&nbsp;']

    let hcode ="";
    let hcode2 ="";
    const sc1div = $('.sc1 > div');
    const sc2div = $('.sc2 > div');
    // 배열 짤라서 한글자씩 스팬태그로 넣기 윗줄
    for(let x of by){
        // console.log(x)
        hcode += `
        <span>${x}</span>
        `;
    }
    // 배열 짤라서 한글자씩 스팬태그로 넣기 밑줄
    for(let x of by2){
        // console.log(x)
        hcode2 += `
            <span>${x}</span>
        `;
    }
    // console.log(hcode)
    // hcode 넣기 윗줄 아랫줄
    sc1div.html(hcode);
    sc2div.html(hcode2);


    function 메인1페이지기능구현해보고싶었던거(){
        
        // 첫번째 줄의 첫번째 span의 넓이구하기
        let qwe = sc1div.find('span').eq(0)
        let qwew = qwe.width()
        console.log(qwe,qwew)
        
        // 첫번째 줄의 마지막 span의 넓이구하기
        let ewq = sc1div.find('span').eq(by.length - 1)
        let rewq = ewq.width()
        
        // console.log(ewq,rewq)
    }
    // 미완 /////////////////////////////


    // 흘러가는 글씨~ // 
    // 합칠부분 많음
    function setFlowBanner(){
        // 섹션랩 너비
        let zxc = $('.sc1').width();
        // 글자랩 너비
        let zxcv = $('.sc1>div').width();
        // console.log(zxc,zxcv)
        // 섹션랩과 글자랩의 크기를 맞춰줬음
        // 섹션의 width100vw가 되어있어서 글자박스의 크기보다 작아서 ...
        zxc = zxcv;
        $('.sc1').width(zxc);
        $('.sc2').width(zxc);
        // console.log(zxc,zxcv)
        // 배너1 - sc1div 배너2 - sc2div

        // 래핑박스 변수 - 공용
        let $wrap = $('.scwrap')
        // 래핑박스 가로크기 - 공용
        let wrapWidth = $('.sc1 >div').eq(0).width();
        // 스팬담고있는 div 가로크기 - 이건 따로~
        let listWidth1 = $('.sc1 >div').eq(0).width();
        let listWidth2 = sc2div.width();
        // 이동속도 픽셀 - 조정능능
        const speed = 92;



        // 리스트복제1 - 따로
        let $clone1 = sc1div.clone();
        sc1div.parent().append($clone1);
        
        // 리스트복제2 - 따로
        let $clone2 = sc2div.clone();
        sc2div.parent().append($clone2);

        flowBannerAct1();
        flowBannerAct2();

        // 배너실행함수 
        // 윗글씨 무한재생 // 아래함와와 합치기 쌉가능
        function flowBannerAct1(){
            // 무한반복을 위해 리스트를 복제 후 배너에 추가
            if(listWidth1 < wrapWidth){
                const listCount = Math.ceil(listWidth1 * 2 / listWidth1);
                for(let i =2; i <listCount; i++){
                    $clone1 = $clone1.clone();
                    $wrap.append($clone1);
                }
            }
            // console.log(listWidth1)
            $wrap.find('section').eq(0).css({
                'animation':`${listWidth1/speed}s linear infinite flowRolling1`
            });
        }; // flowBannerAct1
        // 밑글씨 무한재생 // 윗함수랑 합쳐서 사용 쌉가능
        function flowBannerAct2(){
            // 무한반복을 위해 리스트를 복제 후 배너에 추가
            if(listWidth2 < wrapWidth){
                const listCount = Math.ceil(wrapWidth * 2 / listWidth2);
                for(let i =2; i <listCount; i++){
                    $clone2 = $clone2.clone();
                    $wrap.append($clone2);
                }
            }
            $wrap.find('section').eq(1).css({
                'animation':`${listWidth2/speed}s linear infinite flowRolling2`
            });
        }; // flowBannerAct2
    }
    // 흘러가는글씨 최초호출
    setFlowBanner();



    // // gnb부분 누르면 하얀색부분이 화면덮기
    // // whiteone에 클래스를 주면됩니다 gnb메뉴를 누르면
    // $('.white a').on('click',function(e){
    //     e.preventDefault();
    //     console.log('흰원')
    //     // 1. 흰원에 클래스 on주기
    //     $('.whiteone').addClass('on')
    //     // 2. 서브페이지로 이동하기

    //     // 3. 서브페이지 구성되는걸뿌리기?



    // })





}); // JQB