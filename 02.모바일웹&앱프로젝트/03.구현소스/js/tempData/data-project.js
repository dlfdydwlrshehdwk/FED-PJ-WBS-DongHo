let pjdata = {
    mainarea : `
    <main>
            <div class="wrap">
                <div class="bg">
                    <ul class="projectul">
                        <li v-for="(v,i) in data" :key="i" class="white2">
                        <a @click="md = 1; push = i">
                        {{v.타이틀}}
                        </a>
                        </li>
                    </ul>
                </div>
                <!-- 패럴렉스 이미지 리스트~ -->
                <!-- 왼쪽 이미지 -->
                <div class="pr">
                    <ol class="prleft">
                        <li>
                            <div>
                                <a href="">
                                    <img src="./img/108degrees/small.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/start.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/half.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <img src="./img/manorroad/start.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/manorroad/big.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/manorroad/half.gif" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/manorroad/last.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/manorroad/next.jpg" alt="">
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <img src="./img/dental/small.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/dental/big.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/dental/half.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/dental/half2.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/dental/last.jpg" alt="">
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <img src="./img/108degrees/small.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/start.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/half.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <img src="./img/nightingale/big.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/nightingale/half.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/nightingale/last.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/nightingale/next.png" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/nightingale/start.jpg" alt="">
                                </a>
                            </div>
                        </li>
        
                    </ol>
                    <!-- 오른쪽 이미지 -->
                    <ol class="prright">
                        <li>
                            <div>
                                <a href="">
                                    <img src="./img/108degrees/small.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/start.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/half.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <img src="./img/108degrees/small.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/start.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/half.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <img src="./img/108degrees/small.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/start.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/half.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <img src="./img/108degrees/small.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/start.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/half.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <img src="./img/108degrees/small.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/start.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/half.jpg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="./img/buckhurst/colorbg.jpg" alt="">
                                </a>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>






























            <div class="modal" v-if=" md == true">
        <div class="bigpicturewrap">
        <div class="bigpicture">
            <img :src="
            './img/'+data[push].eg+'/start.jpg'
            " alt="">
        </div>
    </div>
    <div class="titwrap">
        <div class="tit">
            {{data[push].타이틀}}
        </div>
    </div>
    <div class="mdsizewrap">
        <div class="mdsize">
            <img :src="
            './img/'+data[push].eg+'/small.jpg'
            " alt="">
        </div>
        <div class="mdsizetxt">
            {{data[push].작은사진텍스트}}
        </div>
    </div>
    <div class="bigpicture2wrap">
        <div class="bigpicture2">
            <img :src="
            './img/'+data[push].eg+'/big.jpg'
            " alt="">
        </div>
    </div>
    <section class="img50txt50wrap">
        <div class="img50txt50">
            <div class="img50txt50_imgbx">
                <img :src="
                './img/'+data[push].eg+'/half.jpg'
                " alt="">
            </div>
            <div class="img50txt50_txtbx">
                {{data[push].중간사진텍스트}}
            </div>
        </div>
    </section>
    <div class="colorbgwrap">
        <div class="colorbg">
            <h2>
                {{data[push].배경색박스텍스트}}
            </h2>
        </div>
    </div>
    <section class="nextPRwrap">
        <div class="nextPR">
            <div class="nextPRtxtwrap">
                <a href="">
                    <span class="nextPRtxt">
                        NEXT PROJECT
                    </span>
                </a>
            </div>
            <div class="nextPRimgbxwrap">
                <div class="nextPRimgbx">
                    <img :src="
                    './img/'+data[push].eg+'/next.jpg'
                    " alt="">
                </div>
            </div>

        </div>
    </section>
    </div>
        </main>
        
    `,
    modal:`
    
    `,
}

export default pjdata;