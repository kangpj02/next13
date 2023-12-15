import { db } from "@/util/database";

export default async function handler(req, res){


    let sql = "delete from cont where id = ?"
    let id = Number(req.body)

    console.log('아이디',id)

    if(req.method == 'DELETE'){
        
        try{
            let result = await db(sql, [id])
            return res.send(result);       

        }catch(err){
            console.log(err)
        }


    }
    
}