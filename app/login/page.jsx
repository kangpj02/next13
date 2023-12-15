'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

import '../join/style.css'
import { useRouter } from 'next/navigation'

export default function login(){

    const [error, setError] = useState('');
    const router = useRouter() // 라우터 초기화
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        const result = await signIn("credentials", {
          redirect: false,
          username,
          password,
        });
    
        if (result.error) {
            setError('로그인 실패: 아이디 또는 비밀번호를 확인해주세요.');
            // console.log("로그인 실패:", result.error);
        } else {
          // 로그인 성공 후 처리
            console.log("로그인 성공");
            router.push('/')
        
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input name="username" type="text" placeholder="Username" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
         
        </form>
      );
    


















    // const [username , setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const router = useRouter() // 라우터 초기화

    // const handleLogin = async (e) => {
    //     e.preventDefault()
    //     const result = await signIn('credentials', {
    //       redirect: false,
    //       username,
    //       password,
    //     })
    //     if (!result.error) {
    //         router.push('/')
    //       // 로그인이 성공하면 리다이렉트 또는 다른 작업을 수행합니다.
    //     } else {
    //       // 로그인 실패 처리
    //       console.error('로그인 실패')
    //     }
    // }



    // return (

    //     <>

    //     <form onSubmit={handleLogin}>
    //         <input
    //         type="text"
    //         placeholder="사용자명"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}/>
    //     <input
    //         type="password"
    //         placeholder="비밀번호"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}/>
    //     <button type="submit">로그인</button>
    //     </form>



    //     {/* <div className="contaner">
    //         <form action="/login" method="POST">
                
    //             <div className="con-box">
    //                 <h3>로그인</h3>
    //                 <div className="login-box">
    //                     <label>아이디</label>
    //                     <input type="text" name="user_id"/>
    //                 </div>
    //                 <div className="login-box">
    //                     <label>비밀번호</label>
    //                     <input type="password" name="user_pw"/>
    //                 </div>
    //                 <button type="submit">로그인</button>
                    
    //             </div>

    //         </form>

    //     </div> */}
        
    //     </>

    // )


}