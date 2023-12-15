import { db } from "@/util/database";


export default async function handler(req, res){

    let sql = "UPDATE cont SET title = ?, writer = ?, pass = ?, content = ?  WHERE id = ?";

    let 
    title = req.body.title,
    writer = req.body.writer,
    pass = req.body.pass,
    content = req.body.content,
    id = req.body.params;

   if(req.method == 'POST'){
        if(title ==''){
            return res.status(400).json('제목입력')
        }
        // if(writer == ''){
        //     return res.status(400).json('작성자를 입력해주세요')
        // }
        if(pass == ''){
            return res.status(400).json('게시글 비밀번호를 입력하세요')
        }if(content == ''){
            return res.status(400).json('내용을 입력하세요')
        } 
        try{
            let result = await db(sql, [
                title,
                writer,
                pass,
                content,
                id,
            ])
            return res.redirect(302,"/list") 
        }catch(err){
            console.log(err)
        }
   }



}