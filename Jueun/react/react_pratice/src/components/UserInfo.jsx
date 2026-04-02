import React, { useState } from "react";

function UserInfo() {
  const [user, setUser] = useState({
    userName: '홍길동',
    userAge: '0세',
    userEmail: 'hong@example.com'
  });

  const handleUserChange = (e) => {
    const { name, value} = e.target;
    setUser({
        ...user,
        [name]: value
    });
  };

  return (
    <>
      <form action="/login" method="post">
        이름: <input
          type="text"
          placeholder="홍길동"
          name="userName"
          value={user.userName}
          onChange={handleUserChange}
        />
        <br />
        나이: <input
          type="text"
          name="userAge"
          placeholder="25"
          value={user.userAge}
          onChange={handleUserChange}
        />
        <br />
        이메일: <input
          type="text"
          name="userEmail"
          placeholder="hong@example.com"
          value={user.userEmail}
          onChange={handleUserChange}
        />
        <br />
        
        <h3>프로필</h3>
        <p>{user.userName}({user.userAge})</p>
        <p>{user.userEmail}</p>
       
      </form>
    </>
  );
}

export default UserInfo;
