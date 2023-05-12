$('html,body').animate({scrollTop : '0px'})

$(()=>{ // JQB //

    // 왼쪽이미지 박스 변수
    const prleft = $('.prleft li')
    // 오른쪽 이미지 박스 변수
    const prright = $('.prright li')

    // 패럴렉스 왼쪽 애들조정 1 6 11 16
    prleft.find('div:nth-child(5n+1)').css({
        width : "30rem",
        height : "20rem",
        left : "20%",
        marginBottom : '20rem'
    })
    // 2 7 12 17 22
    prleft.find('div:nth-child(5n+2)').css({
        width: '13rem',
        height: '16rem',
        left: '70%',
        marginBottom: '40rem',
    })
    // 3 8 13 18 23
    prleft.find('div:nth-child(5n+3)').css({
        width : "31rem",
        height : "21rem",
        left : "20%",
        marginBottom : '17rem'
    })
    // 4 9 14 19 24
    prleft.find('div:nth-child(5n+4)').css({
        width : "10rem",
        height : "15rem",
        left : "83%",
        marginBottom : '17rem'
    })
    // 5 10 15 20
    prleft.find('div:nth-child(5n+5)').css({
        width : "27rem",
        height : "18rem",
        left : "32%",
        paddingBottom : '45rem'
    })

    // 패럴렉스 오른쪽 애들조정 1 6 11 16
    prright.find('div:nth-child(5n+1)').css({
        width : "32rem",
        height : "23rem",
        right : "10%",
        marginBottom : "20rem",
        paddingTop : "10rem"
    })
    // 2 7 12 17 22
    prright.find('div:nth-child(5n+2)').css({
        width : "15rem",
        height : "18rem",
        right : "-4%",
        marginBottom : "25rem"
    })
    // 3 8 13 18 23
    prright.find('div:nth-child(5n+3)').css({
        width : "26rem",
        height : "20rem",
        right : "-10%",
        marginBottom : "15rem"
    })
    // 4 9 14 19 24
    prright.find('div:nth-child(5n+4)').css({
        width : "14rem",
        height : "20rem",
        right : "-1%",
        marginBottom : "13rem"
    })
    // 5 10 15 20
    prright.find('div:nth-child(5n+5)').css({
        width : "28rem",
        height : "23rem",
        right : "-9%",
        paddingBottom : "45rem"
    })


    // 글씨 기준값 잡아준 영역

    // li하나의 높이값(패딩포함)
    let lih = $('.projectul li').innerHeight();

    // 밑으로 내릴때 위에가 비어보이니까 기준값을 위에 하나있게 셋팅하기
    $('.projectul').css({
        transform : `translate(-50%,0)`,
        position : 'absolute',
        top : -lih + 'px',
        left : '50%',
        // transform : 'translate(-50%,0)',
    })

    // 이미지박스 기준값 잡아준 영역

    // li의 하나의 높이값
    let prlih = $('.prleft li').innerHeight();
    // 밑으로 내릴때 위에가 비어보이니까 기준값을 위에 하나있게 셋팅하기
    $('.prleft').css({
        top : -prlih + 'px',
    })
    // li의 하나의 높이값
    let prrlih = $('.prright li').innerHeight();
    // 밑으로 내릴때 위에가 비어보이니까 기준값을 위에 하나있게 셋팅하기
    $('.prright').css({
        top : -prrlih + 'px',
        // transition : '.4s linear'
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
    // 방향에따른 늘고줄을 변수 (글자)
    let pno = 0; 
    // 방향에 따른 늘고줄을 변수 (그림?)
    // 혹시 필요할까봐
    let pno2 =0;
    // 글자나 이미지를 나오게하기위한 내맘대로변수
    let qwe = 0; 
    // 패딩포함 li의 높이 / 10
    let lih10 = $('.projectul li').innerHeight()/10
    // 이미지박스 li의 높이 /20
    // 왼쪽
    let imgh20 = $('.prleft li').innerHeight()/20
    // console.log(imgh20)
    // 휠이벤트 시작하기 //
    $(window).on('wheel',wheelFn);

    // startSS();
    // 휠이벤트 함수 //
    function wheelFn(){
        // 되나안되나 테스트
        console.log('휠')
        // 방향체크
        let delta = event.wheelDelta;
        // 방향에 따른 ...
        // 휠 내릴떄
        if(delta < 0){
            pno++;
            qwe++;
            pno2++;
        }
        // 휠 올릴떄
        else {
            pno--;
            qwe--;
            pno2--;
        }
        
        // console.log(delta,pno)
        // ul과 이미지가 움직여요 함수
        moveScroll();
        // 어페에에엔드 프리펜드 글씨 짤라서 위로올라가는 함수
        apdprpd();

        console.log('pno',pno,'pno2',pno2)
    };

    // ul과 이미지가 움직여요 함수 //
    function moveScroll(){

        // 글귀 움직이기
        // ul자체가 올라가게 설정되어있음.
        $('.projectul')
        // li의 10분의 1크기만큼 왔다갔다~
        .css({
            transform : `translate(-50%,${-pno * lih10 + 'px'})`
        });
        
        // 이제 이거해야한다 5/11 
        // 글씨가 이동하는거보단 빠른느낌을주어 패럴렉스 느낌을 살리고자함

        // 이미지 움직이기
        $('.prleft, .prright').css({
            transform : `translateY(${-pno2 * imgh20 + 'px'})`
        });
    };
    // ul과 이미지가 움직여요 함수 //



    // 어페애에엔드 프리이펜드으 함수 //
    function apdprpd(){
        // console.log('어페엔드프리펜드')
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
        // 돔기준에서 ul의 윗대가리 위치차이
        let ulh = $('.projectul').offset().top;
        // ulh 내림계산
        let ulhn = Math.floor(ulh)
        console.log('li높이값:',2*lihn,'\nul의 윗대가리:',ulhn);

        // 그림 변수
        // 왼쪽박스
        const prleft = $('.prleft')
        // 왼쪽박스 li의 첫요소 - ㅇㅍㄷ ㅍㄿㄷ용
        let q = prleft.find('li').first()
        // 왼쪽박스 li의 마지막요소 - ㅇㅍㄷ ㅍㄿㄷ용
        let w = prleft.find('li').last()
        // li의 하나의 높이값
        let prllih = $('.prleft li').innerHeight();
        // 돔기준에서 왼쪽pr박스 의 윗대가리 위치차이
        let prlh = prleft.offset().top;

        console.log('pr list높이',prllih,'prl박스 윗대가리',prlh)

        // 오른박스
        const prright = $('.prright')
        // 왼쪽박스 li의 첫요소 - ㅇㅍㄷ ㅍㄿㄷ용
        let z = prright.find('li').first()
        // 왼쪽박스 li의 마지막요소 - ㅇㅍㄷ ㅍㄿㄷ용
        let x = prright.find('li').last()
        // li의 하나의 높이값
        let prrlih = $('.prleft li').innerHeight();
        // 돔기준에서 왼쪽pr박스 의 윗대가리 위치차이
        let prrh = prleft.offset().top;

        console.log('pr list높이',prlih,'prl박스 윗대가리',prlh)







        // 글씨 위아래로갈때 어펜드 프리펜드 

        // ul윗대가리가 li의 높이값이랑 같아지면.. =li높이만큼 한칸 나간다면
        // 스크롤을 내리면 맨위 li를 맨밑으로내릴때의 조건!
        if(ulhn <= -lihn*2){
            // ul의 트랜스폼y를 0으로 바꾸고
            ulh = 0;
            pno =0;
            $('.projectul').css({
                transform : `translate(-50%,0)`
            })
            // 맨위의 li를 잘른후 밑에다가 쳐박는다.
            setTimeout(()=>{
                projectul.append(a)

            },10)
            console.log('li높이값:',2*lihn,'\nul의 윗대가리:',ulhn);
        }
        // 스크롤 올릴때
        else if(ulhn >= 0){
            // ul의 트랜스폼y를 0으로 바꾸고
            ulh = 0;
            pno =0;
            projectul.prepend(b)
            $('.projectul').css({
                transform : `translate(-50%,0)`
            })
            // 맨밑의 li를 잘른후 위에다가 쳐박는다.
        }

        // 다하면 사진도 기준값정해서 어페에엔드 프리펜드

        // 왼쪽이미지박스
        // 휠내릴때
        if(prlh <= -prllih*2){
            console.log('내릴떄조건맞니?') // 충족
            pno2 = 0;
            prleft.append(q)
            prleft.css({
                transform : `translateY(0)`
            })
        }
        // 휠올릴때
        else if(prlh >= 0){
            console.log('올릴때조건맞니?') // 충족
            pno2 = 0;
            prleft.prepend(w)
            prleft.css({
                transform : `translateY(0)`
            })
        }

        // 오른쪽 이미지박스
        // 휠내릴때
        if(prrh <= -prrlih*2){
            console.log('내릴떄조건맞니?') // 충족

            // 부드럽게 해보는중 - 실패1
            // pno2=0;
            // prright.append(z)
            // prright.css({
            //     transform : `translateY(0)`,
            //     transition : '0.4s linear ',
            // })
            // setTimeout(()=>{
            //     prright.css({
            //         transition : 'none',
            //     })
            // },400)



            // 원래꺼
            pno2 = 0;
            prright.append(z)
            prright.css({
                transform : `translateY(0)`,
            })
            
            
        }
        // 휠올릴때
        else if(prrh >= 0){
            console.log('올릴때조건맞니?') // 충족
            pno2 = 0;
            prright.prepend(x)
            prright.css({
                transform : `translateY(0)`
            })
        }

    }
    // 어페애에엔드 프리이펜드으 함수 //
    


    // 서브페이지 함수구역 - 프로젝트 뿌려주는부분
    // 큰그림 아래에서 위로
    $('.bigpicture').css({
        transition : '2s linear',
        transform : 'scale(1)',
    })
    $('.bigpicture').addClass('on')

    let zxc = $('.tit span')
    let dsa = zxc.eq(0).text()
    let dsa2 = zxc.eq(1).text()
    let dsa3 = zxc.eq(2).text()
    console.log(dsa)

    hcode(dsa,$('.tit'),dsa2,dsa3)
    setTimeout(()=>{
        $('.tit').addClass('on')
    },10)
    // hcode(dsa2,$('.tit'))
    // hcode(dsa3,$('.tit'))

    function hcode(a,b,c,d){    
        let hcode = ""
        let idx = 0;
        for(let x of a){
            if(x === "") x= "&nbsp;";
            console.log(x)
            hcode += `
            <span style="transition-delay:${1+idx*0.015}s;">${x}</span>
            `
            idx++;
        }
        hcode += `<br>`
        for(let x of c){
            if(x === "") x= "&nbsp;";
            console.log(x)
            hcode += `
            <span style="transition-delay:${1+idx*0.015}s;">${x}</span>
            `
            idx++;
        }
        hcode += `<br>`
        for(let x of d){
            if(x === "") x= "&nbsp;";
            console.log(x)
            hcode += `
            <span style="transition-delay:${1+idx*0.015}s;">${x}</span>
            `
            idx++;
        }
        hcode += `<br>`
        
        b.html(hcode)
    }


    console.log(hcode)
    










}) // JQB //