import React, { useState } from 'react'

function LoginForm() {

    const [name, setName]=useState('');
    const [password, setPassword]=useState('');

  return (
    <>
      <h2>로그인 폼</h2>

      사용자명:  
      <input 
      type="text"
      value={name}
      placeholder='사용자명'
      />
      <br />

      비밀번호:  
      <input 
      type="password"
      value={password}
      placeholder='비밀번호'
      />      
      <br />

      <input
      type="checkbox"
      /> 로그인 상태 유지

      
    </>
  )
}

export default LoginForm
