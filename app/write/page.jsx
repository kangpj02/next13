
import { getServerSession } from 'next-auth'
import './write.css'
import { authOptions } from '@/pages/api/auth/[...nextauth]'


export default async function write(){


    let session = await getServerSession(authOptions)
    console.log('세션정보',session.user.name)

    return (

        <div>       
            {session ? (
            <div className="modify_container">
                <div className="modify-header">
                    <h3>공지사항</h3>
                    <p>공지사항 글 작성</p>
                </div>
                <form action="/api/post/write" method="POST">
                    <div className="modify-title">
                        <input defaultValue={session.user.name} name='userid' style={{display:'none'}} />
                        <label>제목 <input className="modify-ip" type="text" id="" name="title" placeholder="글제목"/></label>
                    </div>
                    <div className="modify-who">
                        <label>글쓴이 <input className="modify-W" type="text" id="" name="writer"/></label>
                        <label className="margin">비밀번호 <input className="modify-W" type="text" id="" name="pass"/></label>
                    </div>
                    <div className="modify-write">
                        <label>내용입력<textarea name="content" id=""  rows="10" wrap="hard" placeholder="내용"></textarea></label>
                    </div>
                    <button type="submit">전송</button>
                </form>
            </div>
            ):(
                <div>로그인해</div>
            )}
        </div>

    )
}