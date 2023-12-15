'use client'

import Link from "next/link";



export default function ListClient({getdata}){

  const handler = (e, id) =>{
    
    console.log('아이디',id)
    if(confirm("삭제 하시겠습니다까" + id)){
      fetch('/api/post/delete', {
        method : 'DELETE',
        body: JSON.stringify(id),
      }).then(()=>{
        e.target.parentElement.style.opacity = 0;
        setTimeout(() => {
          e.target.parentElement.style.display = "none"
        }, 500);
      })
    }


  }

    return (

      <div>
        {
          getdata.map((data, i)=>{
            
            return (
              <div className="list-item" key={i}>
                <Link href={"/detail/" + data.id}>
                  <h4>{data.title}</h4>
                </Link>
                <Link href={'/edit/' + data.id} className="linksty">수정</Link>

                <p className="delete-btn" onClick={(e)=>{handler(e, data.id)}}>삭제</p>
                <p>{data.regdate}</p>
                
              </div>
              
            )
          })
        }

      </div>
    
    );


}