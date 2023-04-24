$(()=>{

    const wrap = $('.wrap')

        const gg = ()=>{
            $('.c1,.rt1,.pg1')
            .animate({
                strokeDashoffset:0
            },1000,'linear')
            .delay(1000)
            .animate({
                strokeDashoffset:-1200
            },1000,'linear')
            .delay(1000)
            .animate({
                strokeDashoffset :1200
            },0)
        }

        // const ll = () =>{
        //     $('.rt2')
        //     .css({
        //         transform:'translateY(0)',
        //         transition: '1s linear'
        //     })
        //     .delay(1000)
        //     .css({
        //         transform:'translateY(110%)',
        //         transition: '1s linear'
        //     })
        //     .delay(1000)
        //     .css({
        //         transition : 'none',
        //         transform:'translateY(-110%)'
        //     })
        // }
        const ll = () => {
            $('.svg4')
            .animate({
                top:'0%'
            },1000,'linear')
            .delay(1000)
            .animate({
                top : '100%'
            },1000,'linear')
            .delay(1000)
            .animate({
                top: '-100%'
            },0)
        }
        // 함수안에 함수안에 함수 재귀재귀재귀
        gg(gg(gg()))
        ll(ll(ll()))
        // 반네모 만들어서 아래로 가는거만 처리하면끝
    }) // JQB

    


 // ㄹ드구역