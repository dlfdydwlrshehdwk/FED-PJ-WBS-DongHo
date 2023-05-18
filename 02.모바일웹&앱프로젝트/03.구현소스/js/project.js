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
// css초기화 가져오기
import initCss from "./init.js";


// 상단영역 메뉴 뷰 템플릿 셋팅
Vue.component("top-comp",{
    template:comData.tarea,
}); // 상단영역 템플릿 셋팅

// 로그인영역 메뉴 뷰 템플릿 셋팅
Vue.component("login-comp",{
    template:comData.login,
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
    methods:{
        nextItem(pm){
            setTimeout(()=>{
                initCss()
                this.push += 1;
                $(".modal").animate({scrollTop:"0"},1);
                // setTimeout(()=>{
                //     pjB();
                // }) 
            },1400)
        },
        mdScroll(){
            // console.log(777);
            catWheel(true,true);
        }
    },
    mounted(){
        // 프로젝트페이지 li들 ^를 br태그로 하기
        function setting(){
            for(let i = 0; i <11;i++){
                let a = $('.projectul li').eq(i).find('a').html();
                 $('.projectul li').eq(i).find('a').html(a.replaceAll('^','<br>'));
            }
        }
        setting()

        // 모달안의 애들이 안잡힘.
        function hi(){
            $('.white2').click(()=>{
                console.log('hi실행')
                $(()=>{
                    setTimeout(()=>{
                        pjB();
                    },10)
                });  
            })
        }
        hi()
        
        $('.nextPRtxt').on('click', function(){
            console.log('초기화 클릭')
            initCss()
            // setTimeout(()=>{
            //     pjB()
            // },1000)
        })
        
$(()=>{

    })

       

    },
}); // 메인영역 템플릿 셋팅


// 상단영역 뷰 인스턴스 생성

new Vue({
    el:"#top",
    created:function(){
        

    },
    mounted:function(){
    },
})

// 로그인영역 뷰 인스턴스 생성

new Vue({
    el:"#login",
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
        catWheel(false,false);
        console.log(data[1])
        $('.bigpicture').addClass('on')
        $('.nextPRtxt').on('click', function(){
            console.log('초기화 클릭')
            initCss()
            // setTimeout(()=>{
            //     pjB()
            // },1000)
        })

    },
})

    