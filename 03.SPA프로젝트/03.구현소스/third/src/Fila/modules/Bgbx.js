// Bgbx 컴포넌트 모듈
import '../css/bgbx.css';
import bgsrc from '../Bg';
import React from 'react';

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
                            <img src=''/>
                            <h1>PLAY ▶</h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default Bgbx;