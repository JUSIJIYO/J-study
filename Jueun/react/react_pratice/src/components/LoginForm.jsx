import React, { useState } from 'react'

function LoginForm() {

    const [name, setName]=useState('');
    const [password, setPassword]=useState('');

    const [check,setCheck]=useState(false);

    const handleCheck = () =>{
      setCheck(!check);
    }
    // 내가 입력한 이름
    const inputName = (e)=>{
      setName(e.target.value)

    }
    
    const inputPw = (e)=>{
      setPassword(e.target.value)
    }

    const btnClick = () => {
      alert(`로그인 시도!
        사용자: ${name}
        기억하기: ${check ? "예": "아니요"} `
      )
    }
  return (
    <>
      <h2>로그인 폼</h2>

      사용자명:  
      <input 
      type="text"
      value={name}
      placeholder='사용자명'
      onChange={inputName}
      />
      <br />

      비밀번호:  
      <input 
      type="password"
      value={password}
      placeholder='비밀번호'
      onChange={inputPw}
      />      
      <br />

      <input
      type="checkbox"
      checked={check}
      onChange={handleCheck}
      
      /> 로그인 상태 유지
    <br/>
      <input type="button" onClick={btnClick} value="로그인"/>
    </>
  )
}

export default LoginForm
