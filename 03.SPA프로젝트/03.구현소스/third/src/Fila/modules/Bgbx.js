// Bgbx 컴포넌트 모듈
import '../css/bgbx.css';
import bgsrc from '../Bg';

function Bgbx(props){
    return(
        <>
            <div className="bgbx" 
            style={{backgroundImage:'url('+ bgsrc[props.sub] +')'}}
            >
                <div className="tit">
                    {props.title}
                </div>
            </div>
        </>
    )
};

export default Bgbx;