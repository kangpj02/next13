'use client'

import { useState } from 'react';
import './style.css'

export default function Join(){

	const [user, setUser] = useState(''); // 사용자 아이디 값을 저장하는 상태 변수
	const [password, setPassword] = useState(''); // 비밀번호 값을 저장하는 상태 변수를 생성합니다.
	const [inputBorderColor, setInputBorderColor] = useState(''); // 인풋 테두리 색상 상태 변수
	const [CheckBorderColor, setCheckBorderColor] = useState(''); //비번 체크 인풋 테두리 색상 상태 변수
	const [errorMessage, setErrorMessage] = useState(''); // 오류 메시지 상태 변수
	const [checkerrorMessage, setCheckerrorMessage] = useState(''); // 오류 메시지 상태 변수
	const [PasswordCheck, setPasswordCheck] = useState(''); // 비밀번호 확인 값을 저장하는 상태 변수를 생성합니다.


  //아이디 한글 입력 방지 
	function handleOnInput(e) {
		let inputValue = e.target.value;
		// 입력 값을 정제하여 영문 알파벳만 허용
		inputValue = inputValue.replace(/[^A-Za-z0-9]/ig, '');
		// 입력값 업데이트
		e.target.value = inputValue;
		if(inputValue.length <= 12){
			setUser(inputValue); // 상태 변수에 업데이트된 아이디 값을 저장합니다.
		}
	}


	//패스워드 정규식
	function handlePasswordInput(e) {
		const passwordValue = e.target.value;
		let passValue = passwordValue.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
		e.target.value = passValue;
		setPassword(passValue); // 상태 변수에 업데이트된 비밀번호 값을 저장합니다.
		
		
		// 비밀번호 규칙 검사
		const hasUpperCase = /[A-Z]/.test(passValue);
		const hasLowerCase = /[a-z]/.test(passValue);
		const hasNumber = /[0-9]/.test(passValue);
		const hasSpecialChar = /[!@#^]/.test(passValue);
		if (
			passValue.length >= 3 &&
			hasUpperCase &&
			hasLowerCase &&
			hasNumber &&
			hasSpecialChar
		) {
			setInputBorderColor(''); // 비밀번호 규칙을 만족하면 테두리 색상을 원래대로
		  setErrorMessage(''); // 오류 메시지를 초기화
		} else {
			setInputBorderColor('red'); // 비밀번호 규칙을 어길 경우 테두리 색상을 빨간색으로
		  setErrorMessage('12자이상 영문 대 소문자와 숫자 특수문자(!@#^)을 입력하여주세요'); // 오류 메시지 표시
		}
	}

	//비밀번호 확인
	function handlePasswordCheck(e) {
		const PasswordCheckValue = e.target.value;
		//한글입력 방지
		let passValueCheck = PasswordCheckValue.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
		e.target.value = passValueCheck;
		
		setPasswordCheck(passValueCheck);
		// 비밀번호 입력값과 동일하면
		if (PasswordCheckValue === password) {
			setCheckBorderColor(''); // 비밀번호가 일치하면 테두리 색상을 원래대로
		  setCheckerrorMessage(''); // 오류 메시지를 초기화
			if(password == ''){
				setCheckBorderColor('');
				setCheckerrorMessage('');
			}
			//비밀번호 입력 값과 불일치 하면
		} else {
			setCheckBorderColor('red'); // 비밀번호가 불일치하면 테두리 색상을 빨간색으로
		  setCheckerrorMessage('비밀번호가 일치하지 않습니다'); // 오류 메시지 표시
		}
	}




	return (


		<div>
			<h1 className="title_text">- 회원가입 -</h1>

				<div className="contaner-box">

					<form action="/api/auth/join" method="POST">
				
						<div className="input-write">
										
							<label><p>아이디</p>
								<input type="text" name="user_id" maxLength="12" defaultValue={user} onInput={handleOnInput} required/>
								<span className='id-same'>중복확인</span>
							</label>
							<label><p>비밀번호</p>
								<input type="password"  name="user_pass" required onInput={handlePasswordInput}  style={{ borderColor: inputBorderColor }} />
								{errorMessage && <p className="error-message">{errorMessage}</p>}
							</label>
							<label><p>비밀번호 확인</p>
								<input type="password" name="user_repass" onInput={handlePasswordCheck} style={{ borderColor: CheckBorderColor }} required/>
							</label>
							{checkerrorMessage && <p className="error-message">{checkerrorMessage}</p>}                        
							<label><p>이메일</p>
								<input type="email" name="user_email" required/>
								<button className="id-same">중복확인</button>
							</label> 
							<label><p>이름</p>
								<input type="text" name="user_name" required/>
							</label>
							<label className="date_item"><p>생년월일</p>
								<input placeholder="YYYY-MM-DD" name="user_day" id="date"/>
								{/* <div className=""> <span className="warning"/>유효하지 않은 날짜입니다.</div> */}
							</label>
							<button className="jon-btn" type="submit">회원가입 하기</button>

						</div>
					</form>
				</div>


		</div>
			

	)

}


