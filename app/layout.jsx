import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link";
import LoginBtn from './LoginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {

  let session = await getServerSession(authOptions)

  return (
    <html lang="ko">
      <body className={inter.className}>
      <div className="navbar"> 
        <Link href="/" className="logo">Appleforum</Link> 
        <Link href="/list">List</Link>
        {session? <Link href="/write">write</Link> : null}
        {session? <span>{session.user.name}</span>: null}
        { session? null : <Link href="/login" ><span className='logout-button'>로그인</span></Link> }
        {/* <Link href="/login" ><span className='logout-button'>로그인</span></Link> */}
        <LoginBtn session={session}/>
        <Link href="/join"><span className='logout-button'>회원가입</span></Link>
      </div>  
        
        {children}
        
        </body>
    </html>
  )
}


