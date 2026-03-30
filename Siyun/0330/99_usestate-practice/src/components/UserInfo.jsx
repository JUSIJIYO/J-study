import React, { useState } from 'react';

function UserInfo() {
  const [userId, setUserId] = useState('');
  const [userAge, setUserAge] = useState(0);
  const [userEmail, setUserEmail] = useState('');

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleUserAgeChange = (e) => {
    setUserAge(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  return (
    <>
      <h4>
        이름 :
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={handleUserIdChange}
        />
      </h4>
      <h4>
        나이 :
        <input
          type="number"
          name="userAge"
          value={userAge}
          onChange={handleUserAgeChange}
        />
      </h4>
      <h4>
        이메일:
        <input
          type="text"
          name="userEmail"
          value={userEmail}
          onChange={handleUserEmailChange}
        />
      </h4>

      <h2>프로필</h2>
      <h4>
        {userId} ({userAge}세)
      </h4>
      <h4>{userEmail}</h4>
    </>
  );
}

export default UserInfo;
