// Bgbx 컴포넌트 모듈
import '../css/bgbx.css';
import bgsrc from '../Bg';
import { useState } from 'react';
import $ from 'jquery'
import { Parallax } from 'react-scroll-parallax';



const vidisrc = {
    mountain : {
        isrc : "./images/mountain/vid.jpg",
        vsrc : "https://www.youtube.com/embed/ez54zUhDJm8",
    },
    woods : {
        isrc : "./images/woods/vid.jpg",
        vsrc : "https://www.youtube.com/embed/xEJ5bT6tHXw",
    },
    elements : {
        isrc : "./images/elements/vid.jpg",
        vsrc : "https://www.youtube.com/embed/byVOG479ka4"
    },
    canyon : {
        isrc : "./images/canyon/vid.jpg",
        vsrc : "https://www.youtube.com/embed/G7Zw7RY_7nw",
    }
}

function jqFn(){
    $(()=>{
        console.log('비지비엑')
        let a = $('.vidwrap_imgbx')
        let b = $('.vidwrap_vidbx')
        let c = $('.playbtn')
        console.log(a,b,c)
        setTimeout(()=>{
            cclick()
        },10)
        function cclick(){
            let a = $('.vidwrap_imgbx')
        let b = $('.vidwrap_vidbx')
        let c = $('.playbtn')
            c.on('click',()=>{
                console.log('눌렀다.')
                a.css({
                    opacity :0,
                })
                setTimeout(()=>{
                    a.css({display: 'none'})
                },400)
                b.css({
                    opacity : 1
                })
                c.css({
                    zIndex : -1,
                })
            })
        }
    })
}

function Bgbx(props){
    const [vid, setVid] = useState(0);


    return(
        <>
            <div className="bgbxwrap">
                <div className="bagbx">
                    <div className="tit">
                        {props.title}
                    </div>
                    
                    <div className="bag20bx">
                        <img className="bgbx" src={bgsrc[props.sub]} />
                        <Parallax speed={30} translateY={['0px','-500px']}>
                        <div className='vidwrap vidwrap_imgbx'>
                            <img src={vidisrc[props.sub].isrc}/>
                            <h1 onClick={console.log('누름')}
                            className='playbtn'>PLAY ▶</h1>
                        </div>
                        <div className='vidwrap vidwrap_vidbx'>
                            <iframe
                            src={vidisrc[props.sub].vsrc} title='동영상'   
                            ></iframe>
                        </div>
                            </Parallax>
                    </div>
                </div>
            </div>
            {jqFn()}
        </>
    )
};

export default Bgbx;