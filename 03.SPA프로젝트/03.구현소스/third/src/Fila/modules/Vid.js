// 비디오!
import vidsrc from "../data/vidsrc";

function Vid(props){
    return(
        <>
            <section>
                <div>
                    <iframe src={vidsrc[props.vid]}></iframe>
                </div>
            </section>
        </>
    )
}

export default Vid;