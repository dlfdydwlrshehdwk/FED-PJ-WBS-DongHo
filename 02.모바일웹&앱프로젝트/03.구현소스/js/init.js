function initCss(){
    // 대상들
    console.log('초기화')

    $('.mdsizewrap').removeClass('on');
    $('.bigpicture2').removeClass('on');
    $('.bigpicture2wrap').removeClass('on');
    $('.img50txt50wrap').removeClass('on');
    $('.nextPRwrap').removeClass('on');
    $('.colorbgwrap').removeClass('on')


    setTimeout(()=>{
        $('.nextPRimgbx').css({
            transition : 'none',
            transform: 'translateY(0)',
            clipPath : 'ellipse(28% 80% at 50% 100%)',
        })
        
    },1410)
}

export default initCss;