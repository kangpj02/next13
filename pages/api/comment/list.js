import { db } from "@/util/database";

export default async function handler(req, res){

    let sql = "SELECT * FROM comment WHERE contid = ?"
    let id = Number(req.query.id);

    try{
        let result = await db(sql, [id])
        return res.status(200).json(result)
    }catch(err){
        console.log(err)
    }

    


}