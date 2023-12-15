import { db } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler (req, res){

    if(req.method == 'POST'){


        let sql = "INSERT INTO user_inf (user_id, user_nm, user_pass, user_email, user_date) values (?,?,?,?,?)"

        
        let id = req.body.user_id;
        let name = req.body.user_name;
        let password = req.body.user_pass; // 사용자가 제공한 비밀번호
        let email = req.body.user_email;
        let date = req.body.user_day;


        try {
            // 비밀번호를 해싱할 때 먼저 솔트를 생성합니다.
            const saltRounds = 10;
            bcrypt.hash(password, saltRounds, async (err, hash) => { //해쉬된 비밀번호는 두번째인자
                if (err) {
                console.error("비밀번호 해싱 오류:", err);
                return res.status(500).json({ message: "비밀번호 해싱 중 오류 발생" });
                }
                if(id)



                try {
                let dbdata = await db(sql, [id, name, hash, email, date]);
                return res.redirect(302, "/");
                } catch (err) {
                console.error("데이터베이스 쿼리 오류:", err);
                return res.status(500).json({ message: "데이터베이스 쿼리 중 오류 발생" });
                }
            });
        }catch (err) {
            console.log(err);
        }
    }  
}