// 공통 데이터 가져오기
import comData from "./tempData/data-common.js";
// 서브 데이터 가져오기
import pjdata from './tempData/data-project.js'
// 캣휠 가져오기
import catWheel from "./catwheel.js";
// 데이터가져오기
import data from './projectData.js'
// 서브페이지 화면뿌 가져오기
import pjB from './pjB.js';


// 상단영역 메뉴 뷰 템플릿 셋팅
Vue.component("top-comp",{
    template:comData.tarea,
}); // 상단영역 템플릿 셋팅

// 메인영역 메뉴 뷰 템플릿 셋팅
Vue.component("main-comp",{
    template : pjdata.mainarea,
    data(){
        return{
            data : data,
            md:false,
            push : 0,
        }
    },
    mounted(){
        // 프로젝트페이지 li들 ^를 br태그로 하기
        function setting(){
            for(let i = 0; i <9;i++){
                let a = $('.projectul li').eq(i).find('a').html();
                 $('.projectul li').eq(i).find('a').html(a.replaceAll('^','<br>'));
            }
        }
        function hi(){
            $('.white2').click(()=>{
                console.log('hi실행')
                pjB()
                
            })
        }
        // function white(){
        //     $('.white2').click(()=>{
                
        //         $('.whiteone').addClass('on');
        //         setTimeout(()=>{
        //             this.md=true;
        //         },400)
        //     })
        // }
        // white()
        hi()
        setting()


    },
}); // 메인영역 템플릿 셋팅

// 모달영역 메뉴 뷰 템플릿 셋팅
// Vue.component("modal-comp",{
//     template : pjdata.modal,
//     data(){
//         return{
//             md : false,
//         }
//     }
// }); 
// 모달영역 템플릿 셋팅

// 로그인영역 메뉴 뷰 템플릿 셋팅
// Vue.component("login-comp",{
//     template : comData.tarea,
// }); // 로그인영역 템플릿 셋팅

// // 화이트영역 메뉴 뷰 템플릿 셋팅
// Vue.component("white-comp",{
//     template : comData.white,
// }); // 화이트영역 템플릿 셋팅


// 상단영역 뷰 인스턴스 생성

new Vue({
    el:"#top",
    created:function(){
        

    },
    mounted:function(){
    },
})

// 메인영역 뷰 인스턴스 생성

new Vue({
    el:"#main",
    created:function(){
        
    },
    mounted:function(){
        // 캣휠 실행
        catWheel()
        console.log(data[1])
    },
})

// 모달영역 뷰 인스턴스 생성

// new Vue({
//     el:"#modal",
//     created:function(){
        
//     },
//     mounted:function(){
//         pjB()
//     },
// })
