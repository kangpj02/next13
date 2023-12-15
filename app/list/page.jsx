
import { db } from "@/util/database";
import Link from "next/link";
import '../write/write.css'
import ListClient from "./ListClient"

// 다이나믹 렌더링으로 변경 
export const dynamic = 'force-dynamic'

// import ListItem from "./ListItem";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const revalidate = 60; //누가 방문시 60초동안 페이지 캐싱,60초 지나면 다시 캐싱

// export const dynamic = "force-dynamic";

import DetailLink from "./DetailLink";

export default async function List() {
  // const session = await getServerSession(authOptions);

  let data = await db("SELECT id, title,writer, content,DATE_FORMAT(regdate, '%Y-%m-%d') AS regdate FROM cont", []);
  let getdata = JSON.parse(JSON.stringify(data));
  // console.log('데이타',getdata)
  return (

    
    <div className="list-bg">
      <ListClient getdata={getdata} />
      
      
    </div>

  );
}














// // import { dbConnection } from "@/util/database";

// export default function Home({ contList }) {
//     return (
//         <main>
//             <h1>Cont List</h1>
//             <ul>
//                 {contList.map((cont) => (
//                     <li key={cont.id}>
//                         {cont.title}
//                         <br />
//                         {new Date(cont.regdate).toLocaleString()} {/* Date 객체를 문자열로 변환 */}
//                     </li>
//                 ))}
//             </ul>
//         </main>
//     );
// }
// // export { getServerSideProps}
