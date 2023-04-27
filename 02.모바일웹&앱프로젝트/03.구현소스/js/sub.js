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

    

}) // JQB //