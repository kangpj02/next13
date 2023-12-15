import { db } from "@/util/database";
import '../../write/write.css'
import Comment from "../Comment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { notFound } from "next/navigation";

export const revalidate = 60; //누가 방문시 60초동안 페이지 캐싱,60초 지나면 다시 캐싱


export default async function Detail(props){
    let session = await getServerSession(authOptions)
    let params = props.params.page;
    
    let sql = `SELECT id, title, writer, content,DATE_FORMAT(regdate, '%Y-%m-%d') AS regdate FROM cont WHERE id = ${params}`;
   
    let dbdata = await db(sql,[])
    let data = JSON.parse(JSON.stringify(dbdata));

    if(data === null){
        return notFound()
    }

    return (

        <div>
            <h4>상세페이지임</h4>
            <h4>작성자 :{data[0].writer} </h4>
            <h4>제목 : {data[0].title}</h4>
            <p>내용 : {data[0].content}</p>
            <p>----------------------------</p>
           
            <Comment  params={props.params.page} _id={data[0].user_id} />
          
            {/* <Comment session= {session.user.name} params={props.params.page} /> */}

        </div>

    )


     // <div className="modify_container">
        //         <div className="modify-header">
        //             <h3>공지사항</h3>
        //             <p>공지사항 글 작성</p>
        //         </div>
        //         <form action="/api/post/edit" method="POST">
        //             <div className="modify-title">
        //                 <input className="inpnone" type="text" name="params" defaultValue={data[0].id}/>
        //                 <label>제목 <input className="modify-ip" type="text" id="" name="title" placeholder={data[0].title}/></label>
        //             </div>
        //             <div className="modify-who">
        //                 <label>글쓴이 <input className="modify-W" type="text" id="" name="writer" placeholder={data[0].writer} readOnly/></label>
        //                 <label className="margin">비밀번호 <input className="modify-W" type="text" id="" name="pass"/></label>
        //             </div>
        //             <div className="modify-write">
        //                 <label>내용입력<textarea name="content" id=""  rows="10" wrap="hard" placeholder={data[0].content}></textarea></label>
        //             </div>
        //             <button type="submit">전송</button>
        //         </form>
        //     </div>

}