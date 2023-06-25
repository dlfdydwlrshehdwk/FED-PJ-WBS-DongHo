import React, { useEffect, useState } from "react";
function Practice(props){

    let data = [
        {
            id : "1",
            name : "김동호",
            qq : "event"
        },
        {
            id : "2",
            name : "임성해",
            qq : "food"
        },
        {
            id : "3",
            name : "최소미",
            qq : "issue"
        },
        {
            id : "4",
            name : "임유정",
            qq : "trendy"
        },
        {
            id : "5",
            name : "김민경",
            qq : "food"
        },
        {
            id : "6",
            name : "우새미",
            qq : "food"
        },
        {
            id : "7",
            name : "정성우",
            qq : "event"
        },
    ]

    console.log('데이터',data)

    let [num,setNum] = useState('event')
    let [ui, setUi] = useState(data)
    console.log('ui',ui)
    useEffect(()=>{
        let copy = [...ui]
                console.log("복사본",ui)
                copy =data.filter(x => x.qq == num)
                setUi(copy)
                console.log("바뀐거",ui)
    },[num])
    return(
        <> 
            <button onClick={ () => { 
                setNum('event')
             } }>이벤트</button>

            <button onClick={ () => { 
                setNum('food')
             } }>푸드</button>

            <button onClick={ () => { 
                setNum('trendy')
             } }>트렌디</button>

            <button onClick={ () => { 
                setNum('issue')
             } }>이슈</button>



            {
                ui.map((x,i)=>
                <div>
                    <div>{x.id}</div>
                    <div>{x.name}</div>
                </div>
                )
            }
            {
                props.to =='' ?
                <div>휴 된다.</div>
                : <div>아 이런...</div> 
            }
        </>
    )
}
export default Practice;