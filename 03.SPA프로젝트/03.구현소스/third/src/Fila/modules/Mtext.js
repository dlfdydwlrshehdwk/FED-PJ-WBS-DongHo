import React from 'react';
import '../css/mtext.css';

function Mtext(props){
    const mtdata = {
        mountain : {
            tit : "MOUNTAIN",
            p : "Bringing mountains and rock strata together with^patterns that feels at home on the street or very far from it.",
        },
        canyon : {
            tit : "CANYON",
            p : "Made for the restless^ and the relentless, the wild and the bold.",
        },
        elements : {
            tit : "ELEMENTS",
            p : "Full of function and fashion.^ Never sacrificing one to be the other.",
        },
        woods : {
            tit : "WOODS",
            p : "From top to bottom and everywhere in between,^ each piece combines materials that elevate the experience^ and make the journey more comfortable.",
        },
    }
    let a = mtdata[props.tit]
    return(
        <>
            <section className='mtwrap'>
                <h1>{a.tit}</h1>
                <p>{a.p.split('^')[0]}</p>
                <p>{a.p.split('^')[1]}</p>
                {/* 3줄인 애도 있어서 3줄인애가 있다면 출력하게끔.. */}
                {
                    a.p.split('^')[2] != "" &&
                    <p>{a.p.split('^')[2]}</p>
                }
            </section>
        </>
    )
}

export default Mtext;