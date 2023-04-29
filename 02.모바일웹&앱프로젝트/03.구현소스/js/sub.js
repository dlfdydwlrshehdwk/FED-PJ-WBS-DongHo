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
    let pno = 0; // 방향에따른 늘고줄을 변수 
    let qwe = 0; // 글자나 이미지를 나오게하기위한 내맘대로변수
    $(window).on('wheel',wheelFn);
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
        moveScroll();
        apdprpd();
    };


    function moveScroll(){
        // 글귀 움직이기
        $('.projectul')
        // .find('li')
        .css({
            transform : `translateY(${-pno /10 + '%'})`
        });
        // 이미지 움직이기
        $('.prleft, .prright').css({
            transform : `translateY(${-pno + '%'})`
        });
    };

    function apdprpd(){
        // console.log('어페엔드프리펜드')
        // 변수
        // ul
        const projectul = $('.projectul')
        let a = projectul.find('li').first()
        let b = projectul.find('li').last()
        // console.log(qwe)
        if(qwe===3){
            projectul.append(`
            <li><a>Hello${qwe}<br> Nice to meet U!</a></li>
            `)
            qwe=0;
            
        }
        else if(qwe===-3){
            qwe=0;
            projectul.prepend(`
            <li><a>Hello${qwe}<br> Nice to meet U!</a></li>
            `)
        }
        // console.log(projectul.find('li').eq(0))
        // 
        let c = projectul.position();
        console.log(c)
    }




}) // JQB //