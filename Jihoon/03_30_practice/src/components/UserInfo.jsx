import React, { useState } from "react";

function UserInfo() {
  const [userName, setUserName] = useState("홍길동");
  const [userAge, setUserAge] = useState("25");
  const [userEmail, setUserEmail] = useState("hong@example.com");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserAge = (e) => {
    setUserAge(e.target.value);
  };

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value)
  };

  return (
    <>
      <label> 이름 : </label>
      <input 
        type="text" 
        value={userName} 
        name="userName" 
        onChange={handleUserName}
       /> <br />

      <label> 나이 : </label>
      <input 
        type="number" 
        value={userAge} 
        name="userAge" 
        onChange={handleUserAge}  
      /> <br />

      <label> 이메일 : </label>
      <input 
        type="text" 
        value={userEmail} 
        name="userEmail" 
        onChange={handleUserEmail} 
      />
      <p>
        {userName} ({userAge}세)
      </p>
      <p> {userEmail}</p>
    </>
  );
}

export default UserInfo;
