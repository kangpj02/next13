"use client";
import { signIn, signOut } from "next-auth/react";

export default function LoginBtn(props) {
  const user = props.session;

  return (
    <>
     {/* <button className="logout-button" onClick={() => signOut()}>로그아웃</button> */}
      {user === null ? (
        null
      ) : (
        <button className="logout-button" onClick={() => signOut()}>로그아웃</button>
      )}
    </>
  );
}