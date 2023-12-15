'use client'

import { useRouter } from "next/navigation"

export default function DetailLink (){

    let router = useRouter()

    return (

        <div>
            <button onClick={()=>{router.push('/')}}>버튼</button>

        </div>
    )

}