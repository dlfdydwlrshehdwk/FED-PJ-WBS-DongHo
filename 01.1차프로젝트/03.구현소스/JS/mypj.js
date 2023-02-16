window.addEventListener("DOMContentLoaded",()=>{
const qs = x =>document.querySelector(x);

    console.log("로딩완료");

btn = qs(".btn");
sitemap = qs(".sitemap");

btn.onclick = ()=>{
    // console.log(btn);
    sitemap.classList.add("on");
};

});//로드구역 ///