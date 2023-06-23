import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import "../css/markbx.css";

const img = {
    canyon : {
        mark : "./images/canyon/mark.jpg",
        left : "./images/canyon/markl.jpg",
        right : "./images/canyon/markr.jpg",
    },
    elements : {
        mark : "./images/elements/mark.jpg",
        left : "./images/elements/markl.jpg",
        right : "./images/elements/markr.jpg",
    },
    woods : {
        mark : "./images/woods/mark.jpg",
        left : "./images/woods/markl.jpg",
        right : "./images/woods/markr.jpg",
    },
    mountain : {
        mark : "./images/mountain/mark.jpg",
        left : "./images/mountain/markl.jpg",
        right : "./images/mountain/markr.jpg",
    },
}

function Markbx(props){






    return(
        <>
        <section className='markbx_wrap'>
            <div className='markbx'>
                <div className='mark_leftimg'>
                    <Parallax speed={30} translateX={['-100px', '200px']}>
                    <img src={img[props.tit]["left"]} title='휠사사진'/>
                    </Parallax>
                </div>
                <div className='mark_rightimg'>
                <Parallax speed={30} translateX={['-100px', '200px']}>
                    <img src={img[props.tit]["right"]} title='휠라사진'/>
                </Parallax>
                </div>
                <div className='markimg'>
                <Parallax speed={-30} translateX={['-100px', '200px']}>
                    <img src={img[props.tit]["mark"]} title='휠라마크'/>
                </Parallax>
                </div>
            </div>
        </section>
        </>
    )
}

export default Markbx;