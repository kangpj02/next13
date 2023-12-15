import { db } from "@/util/database";

export default async function handler (req, res){

    if(req.method == 'POST'){

        let sql = "INSERT INTO cont (title,writer,pass,content,user_id) values (?,?,?,?,?)";

        let title = req.body.title;
        let writer = req.body.writer;
        let pass = req.body.pass;
        let content = req.body.content;
        let id = req.body.userid;
        console.log('포스트',req.body.userid)

        if(title == ''){
            // alertService.error("제목을 입력해주세요.");
            return res.status(400).json('제목입력')
        }

        
        try {
            let result = await db(sql, [
                title,
                writer,
                pass,
                content,
                id
            ])
            return res.redirect(302,"/list") 

        }catch(err){
            console.log(err)
        }

        
    }


}