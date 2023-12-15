'use client'

export default function Errer({error, reset}){

    return(
        <>
        <h4>에러남</h4>
        {/* 페이지 다시 로드함 */}
        <button onClick={()=>{ reset() }}>다시 로딩</button>
        </>
    )

}