//  링크시스템 JS - link.js


    console.log('링크다')

    link();
    function link(){
        // gnb부분 누르면 하얀색부분이 화면덮기
        // whiteone에 클래스를 주면됩니다 gnb메뉴를 누르면
        $('.white a').on('click',function(e){
            e.preventDefault();
            // 0. 내가 누른 단어 뽑기
            let a = $(this).text().toLowerCase()
            let b = $(this).attr('title')
            // console.log(a,b)

            
            // 1. 흰원에 클래스 on주기
            $('.whiteone').addClass('on');

            // let c = $(e).val()
            // console.log(c)
            // 2. 애니메션션후 서브페이지로 이동하기
            setTimeout(()=>{
                location.href=a+'.html';
            },1200)
            // 3. 서브페이지 구성되는걸뿌리기?


            // ! 같은페이지에서는 적용이 안되게 해야하는데
            // html에서 그냥 클래스뺄까.



    })
    }