import React, { useState } from 'react'

function LoginForm() {

    const [inputValue, setInputValue] = useState({
        userName : "",
        userPsw : ""
    })

    const [ischeck, setIsCheck] = useState(false);

    const btnState = inputValue.userName.trim() !== "" && inputValue.userPsw.trim() !== "";

    const handleInput = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value
        })
    }

    const handleIsCheck = (e) => {
        setIsCheck(!ischeck);
    }

    const handleBtnActive = () => {
            alert(`로그인 시도!
사용자 : ${inputValue.userName}
기억하기 : ${ischeck ? "예" : "아니요"}`)
    }
    

    return (
    <div>
        <label> 사용자명: </label>
        <input type="text" name="userName" value={inputValue.userName} onChange={handleInput}/> <br/>
    
        <label> 비밀번호: </label>
        <input type="password" name="userPsw" value={inputValue.userPsw} onChange={handleInput}/> <br/>

        <input type="checkbox" checked={ischeck} onChange={handleIsCheck} />
        <label> 로그인 상태 유지 </label> <br/>
    
        <input type="button" disabled={!btnState} onClick={handleBtnActive} value="로그인"/> 
    </div>
  )
}

export default LoginForm