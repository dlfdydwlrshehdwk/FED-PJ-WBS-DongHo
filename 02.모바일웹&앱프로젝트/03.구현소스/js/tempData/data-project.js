let pjdata = {
    mainarea: `
    <main>
            <div class="wrap">
                <div class="bg">
                    <ul class="projectul">
                        <li v-for="(v,i) in data" :key="i" class="white2">
                        <a @click="md = 1; push = i;mdScroll()">
                        {{v.타이틀}}
                        </a>
                        </li>
                    </ul>
                </div>
                <!-- 패럴렉스 이미지 리스트~ -->
                <!-- 왼쪽 이미지 -->
                <div class="pr">
                    <ol class="prleft">
                        <li v-for="(v,i) in data" :key="i">
                            <div>
                                <a href="">
                                    <img :src="
                                    './img/'+data[i].eg+'/small.jpg'
                                    " alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img :src="
                                    './img/'+data[i].eg+'/start.jpg'
                                    " alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img :src="
                                    './img/'+data[i].eg+'/last.jpg'
                                    " alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img :src="
                                    './img/'+data[i].eg+'/half.jpg'
                                    " alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img :src="
                                    './img/'+data[i].eg+'/big.jpg'
                                    " alt="">
                                </a>
                            </div>
                        </li>
                        
                        
                    </ol>
                    <!-- 오른쪽 이미지 -->
                    <ol class="prright">
                        <li v-for="(v,i) in data" :key="i">
                            <div>
                                <a href="">
                                    <img :src="
                                    './img/'+data[i].eg+'/start.jpg'
                                    " alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img :src="
                                    './img/'+data[i].eg+'/half.jpg'
                                    " alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img :src="
                                    './img/'+data[i].eg+'/next.jpg'
                                    " alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img :src="
                                    './img/'+data[i].eg+'/big.jpg'
                                    " alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img :src="
                                    './img/'+data[i].eg+'/small.jpg'
                                    " alt="">
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
        <div class="tit">{{data[push].타이틀}}</div>
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
    <div class="colorbgwrap" v-if="data[push].배경색박스텍스트.trim()!=''">
        <div class="colorbg">
            <h2>
                {{data[push].배경색박스텍스트}}
            </h2>
        </div>
    </div>
    <section class="nextPRwrap">
        <div class="nextPR">
            <div class="nextPRtxtwrap">
                <a href="" @click.prevent="nextItem()">
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
    login: `
    
    <div class="loginbg">
    <div class="loginwrap">
        <div class="login_logo">
            <img src="./img/favi.JPG" alt="">
        </div>
        <div class="loginbx">
            <div>
                <div>
                    <span>아이디&nbsp;&nbsp;  </span>
                    <input type="text" name="id" id="id" maxlength="10">
                </div>
                <div>
                    <span>비밀번호</span>
                    <input type="password" name="pw" id="pw" maxlength="10">
                </div>
            </div>
            <div class="login">
                <span>로그인</span>
            </div>
        </div>
        <div class="close">
            X
        </div>
        <div class="graybx">
            <span><a href="">아이디/비밀번호 찾기</a></span>
            <span><a href="">회원가입</a></span>
        </div>
    </div>
</div>

    `,
};

export default pjdata;
