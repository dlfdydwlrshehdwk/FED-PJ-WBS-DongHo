$('html,body').animate({scrollTop : '0px'})

$(()=>{ // JQB //

    console.log('hi')
    // 패럴렉스 배경~
    const pr = $('.pr')
    const prleft = $('.prleft')
    const prright = $('.prright')

    // 패럴렉스 왼쪽 애들조정 1 6 11 16
    prleft.find('li:nth-child(5n+1)').css({
        width : "30rem",
        height : "20rem",
        left : "20%",
        marginBottom : '20rem'
    })
    // 2 7 12 17 22
    prleft.find('li:nth-child(5n+2)').css({
        width: '13rem',
        height: '16rem',
        left: '70%',
        marginBottom: '40rem',
    })
    // 3 8 13 18 23
    prleft.find('li:nth-child(5n+3)').css({
        width : "31rem",
        height : "21rem",
        left : "20%",
        marginBottom : '17rem'
    })
    // 4 9 14 19 24
    prleft.find('li:nth-child(5n+4)').css({
        width : "10rem",
        height : "15rem",
        left : "83%",
        marginBottom : '17rem'
    })
    // 5 10 15 20
    prleft.find('li:nth-child(5n+5)').css({
        width : "27rem",
        height : "18rem",
        left : "32%",
        marginBottom : '45rem'
    })

    // 패럴렉스 오른쪽 애들조정 1 6 11 16
    prright.find('li:nth-child(5n+1)').css({
        width : "32rem",
        height : "23rem",
        right : "10%",
        marginBottom : "20rem"
    })
    // 2 7 12 17 22
    prright.find('li:nth-child(5n+2)').css({
        width : "15rem",
        height : "18rem",
        right : "-4%",
        marginBottom : "25rem"
    })
    // 3 8 13 18 23
    prright.find('li:nth-child(5n+3)').css({
        width : "26rem",
        height : "20rem",
        right : "-10%",
        marginBottom : "15rem"
    })
    // 4 9 14 19 24
    prright.find('li:nth-child(5n+4)').css({
        width : "14rem",
        height : "20rem",
        right : "-1%",
        marginBottom : "13rem"
    })
    // 5 10 15 20
    prright.find('li:nth-child(5n+5)').css({
        width : "28rem",
        height : "23rem",
        right : "-9%",
        marginBottom : "45rem"
    })







    /* 
        휠 이벤트 
        대상 : 바디 
        기능 : 휠내리면 - 가운데글씨 내려가고(조금 10px?)
                        그림들 내려가고(좀많이 100px?)
                        맨밑 글자 그림 위로 올라가서 무한히보이게
                휠올리면 반대
    */


    // 변수모음
    // 방향에따른 늘고줄을 변수 
    let pno = 0; 
    // 글자나 이미지를 나오게하기위한 내맘대로변수
    let qwe = 0; 
    // 패딩포함 li의 높이 / 10
    let lih10 = $('.projectul li').innerHeight()/10

    // 휠이벤트 시작하기 //
    $(window).on('wheel',wheelFn);

    // 휠이벤트 함수 //
    function wheelFn(){
        // 되나안되나 테스트
        console.log('휠')
        // 방향체크
        let delta = event.wheelDelta;
        // 방향에 따른 ...
        if(delta < 0){
            pno++;
            qwe++;
        }
        else {
            pno--;
            qwe--;
        }
        
        // console.log(delta,pno)
        // ul과 이미지가 움직여요 함수
        moveScroll();
        // 어페에에엔드 프리펜드 글씨 짤라서 위로올라가는 함수
        apdprpd();

        console.log(pno)
    };

    // ul과 이미지가 움직여요 함수 //
    function moveScroll(){
        // 갮값
        let c = 4;
        // 갮값 /10 
        let d = c/10;
        console.log(`${(-pno * lih10)+(d + 'rem')}`)

        // 글귀 움직이기
        // ul자체가 올라가게 설정되어있음.
        $('.projectul')
        // li의 10분의 1크기만큼 왔다갔다~
        .css({
            transform : `translateY(${-pno * lih10 + 'px'})`
        });
        
        // 이미지 움직이기
        $('.prleft, .prright').css({
            transform : `translateY(${-pno + '%'})`
        });
    };
    // ul과 이미지가 움직여요 함수 //



    // 어페애에엔드 프리이펜드으 함수 //
    function apdprpd(){
        console.log('어페엔드프리펜드')
        // 변수모음
        // ul 그잡채
        const projectul = $('.projectul')
        // li의 첫번째 요소 - 어펜드 프리펜드용
        let a = projectul.find('li').first()
        // li의 마지막요소 - 어펜드 프리펜드용
        let b = projectul.find('li').last()
        // li하나의 높이값(패딩포함)
        let lih = $('.projectul li').innerHeight();
        // lih 내림계산
        let lihn = Math.floor(lih);
        // 돔기준에서 메인의 윗대가리 위치차이
        let mh = $('main').offset().top;
        // 돔기준에서 ul의 윗대가리 위치차이
        let ulh = $('.projectul').offset().top;
        // ulh 내림계산
        let ulhn = Math.floor(ulh)
        console.log(lihn,ulhn);
        
        // ul윗대가리가 li의 높이값이랑 같아지면.. =li높이만큼 한칸 나간다면
        if(ulhn <= -lihn){
            // ul의 트랜스폼y를 0으로 바꾸고
            ulh = 0;
            pno =0;
            $('.projectul').css({
                transform : `translateY(0px)`
            })
            // 맨위의 li를 잘른후 밑에다가 쳐박는다.
            projectul.append(a)

            console.log(mh,ulh,-lih)



        }
        console.log(mh,ulh,-lih)

        // 내일의 할일 
        // 어페에엔드 프리펜드 ㄴ ㅇ ㄱ
        // ul의 갭값 구해서 높이에에 적용
        // 밑으로하는건 했으니 살짝수정해서 위로갈떄도 되게 조건문
        
        // 다하면 사진도 기준값정해서 어페에엔드 프리펜드








        
        
        // if(qwe===3){
        //     projectul.append(`
        //     <li><a>Hello${qwe}<br> Nice to meet U!</a></li>
        //     `)
        //     qwe=0;
            
        // }
        // else if(qwe===-3){
        //     qwe=0;
        //     projectul.prepend(`
        //     <li><a>Hello${qwe}<br> Nice to meet U!</a></li>
        //     `)
        // }
        // // console.log(projectul.find('li').eq(0))
        // // 
        // let c = projectul.position();
        // console.log(c)
    }
    // 어페애에엔드 프리이펜드으 함수 //
    
    
    
    
}) // JQB //