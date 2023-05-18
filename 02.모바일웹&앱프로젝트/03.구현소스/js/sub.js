
// 공통 데이터 가져오기
import comData from "./tempData/data-common.js";
// 서브 데이터 가져오기
import sdata from './tempData/data-sub.js'
// 화면뿌 js 가져오기
import pjB from './pjB.js'

// 상단영역 메뉴 뷰 템플릿 셋팅
Vue.component("top-comp",{
    template:comData.tarea,
}); // 상단영역 템플릿 셋팅

// 메인영역 메뉴 뷰 템플릿 셋팅
Vue.component("main-comp",{
    template : sdata.mainarea,
}); // 메인영역 템플릿 셋팅

// 하단영역 메뉴 뷰 템플릿 셋팅
Vue.component("info-comp",{
    template : comData.barea,
}); // 하단영역 템플릿 셋팅

// 로그인영역 메뉴 뷰 템플릿 셋팅
Vue.component("login-comp",{
    template : comData.tarea,
}); // 로그인영역 템플릿 셋팅

// 화이트영역 메뉴 뷰 템플릿 셋팅
Vue.component("white-comp",{
    template : comData.white,
}); // 화이트영역 템플릿 셋팅


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
        // 화면뿌
        // pjB()
    },
})

// 하단영역 뷰 인스턴스 생성

new Vue({
    el:"#info",
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


