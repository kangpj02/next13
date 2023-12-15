import { db } from "@/util/database";
import '../../write/write.css'

export default async function edit(props){

    let params = props.params.page;
    let sql = await db(`SELECT id, title, writer, content,DATE_FORMAT(regdate, '%Y-%m-%d') AS regdate FROM cont WHERE id = ${params}`,[])
    let data = JSON.parse(JSON.stringify(sql));
    console.log('데이타파일',params)

    return (

        <div>
            <form action="/api/post/edit" method="POST">

                <div className="modify_container">
                    <div className="modify-header">
                        <h3>수정하기</h3>
                        <p>공지사항 글 수정</p>
                    </div>
                   
                    <div className="modify-title">
                        <input className="inpnone" type="text" name="params" defaultValue={data[0].id}/>
                        <label>제목 <input className="modify-ip" defaultValue={data[0].title} type="text" name="title"/></label>
                    </div>
                    <div className="modify-who">
                        
                        <label>글쓴이 <input defaultValue={data[0].writer}  className="modify-W" type="text" name="writer"/></label>
                        <label className="margin">비밀번호 <input className="modify-W" type="text" name="pass"/></label>
                    </div>
                    <div className="modify-write">
                        <label>
                            내용입력
                            <textarea name="content" rows="40" wrap="hard" defaultValue={data[0].content}></textarea>
                        </label>
                    </div>
                    <button className="btn" type="submit">수정완료</button>
                </div>

            </form>
        </div>

    )

}