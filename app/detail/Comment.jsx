'use client'

import { useEffect, useState } from "react"


export default function Comment({params,_id}){

    // console.log('ffffff',params);
    let [comment, setCommen] = useState('')
    let [data, setdata] = useState([]);
    let [com , setcom] = useState('');

    useEffect(()=>{
          
        fetch('/api/comment/list?id=' +params).then(r=>r.json())
        .then((result)=>{
            console.log('댓글',result)
            setdata(result)
        })
    },[])


    return (
        <>
        <div>댓글부분</div>
        {
            data.map((a, i)=>{
                return(
                    <p key={i}>{a.comtitle}<span>작성자:{a.user_id}</span> </p>
                )
            })
        }
        <input onChange={(e)=>{setCommen(e.target.value)}}/>
        <button onClick={()=>{
            console.log(comment)
            fetch('/api/comment/comment',{
                method: 'POST',
                body: JSON.stringify({comment,params, _id}),
            }).then(res => res.json())
            .then(newComment=>{
                if (newComment && newComment.comtitle && newComment.user_id) {
                    setdata(prev => [...prev, newComment]);
                } else {
                    // 서버로부터 적절한 응답이 오지 않았을 경우 처리
                    console.error('댓글 추가 실패:', newComment);
                }
            })

        }}>댓글입력 </button>
        
        </>


    )


}