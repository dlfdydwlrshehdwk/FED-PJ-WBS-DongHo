// Bgbx 컴포넌트 모듈
import '../css/bgbx.css';
import bgsrc from '../Bg';
import React from 'react';

const vidisrc = {
    mountaine : "./images/mountain/vid.jpg",
    woods : "./images/woods/vid.jpg",
    elements : "./images/elements/vid.jpg",
    canyon : "./images/canyon/vid.jpg",
}

function Bgbx(props){
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
                            <img src={
                                vidisrc[props.sub]
                            }/>
                            <h1>PLAY ▶</h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default Bgbx;