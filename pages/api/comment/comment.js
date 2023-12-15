import { db } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(req, res){

    let session = await getServerSession(req,res, authOptions);

    try{
        if(req.method == 'POST'){
            let bodyParams = JSON.parse(req.body)
            let comment = bodyParams.comment;
            let params = bodyParams.params
            let sql = "INSERT INTO comment (comtitle,user_id, contid) values (?,?,?)"
    
            console.log('세션',session)
    
            if(!session || !session.user){
                return res.status(401).json('로그인 하여주세요')
            }
            
            let id = session.user.name;
    
            if(comment==''){
                return res.status(400).json('댓글을 입력해주세요')
            }

            try{
                let result = await db(sql,[ comment, id, params ])
                
                return res.status(200).json({
                    id: result.id,
                    comtitle: comment,
                    user_id: id
                })
            }catch(err){
                console.log(err)
                return res.status(500).json('서버 오류 발생');
            }
    
        }else{
            // POST 메소드가 아닐 경우의 처리
            return res.status(405).json('지원하지 않는 요청 방식입니다.');
        }
    } catch (err) {
        console.error('서버 에러:', err);
        return res.status(500).json('서버 내부 오류');
    }

}