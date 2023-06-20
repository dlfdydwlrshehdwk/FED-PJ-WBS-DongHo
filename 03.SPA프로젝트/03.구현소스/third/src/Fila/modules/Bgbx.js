// Bgbx 컴포넌트 모듈
import '../css/bgbx.css';
import bgsrc from '../Bg';
import { useState } from 'react';



const vidisrc = {
    mountaine : {
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
                        <div className='vidwrap'>
                            <img src={vidisrc[props.sub].isrc
                            }/>
                            <h1>PLAY ▶</h1>
                        </div>
                    <div className='vidwrap'>
                        <iframe
                        src={vidisrc[props.sub].vsrc} title='동영상'   
                        ></iframe>
                    </div>

                        </div>




                </div>
            </div>
        </>
    )
};

export default Bgbx;