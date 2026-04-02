import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const [keep, setKeep] = useState(false);

  const handleLogin = () => {
    alert(
      `로그인 시도! \n사용자: ${username} \n기억하기: ${keep ? '예' : '아니오'}`,
    );
    setUsername('');
    setpassword('');
  };
  return (
    <>
      <div>
        사용자명
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="사용자명"
        />
      </div>

      <div>
        비밀번호
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="비밀번호"
        />
      </div>

      <div>
        <input
          type="checkbox"
          checked={keep}
          onChange={(e) => setKeep(e.target.checked)}
        />
        로그인 상태 유지
      </div>

      <button onClick={handleLogin} disabled={!username || !password}>
        로그인
      </button>
    </>
  );
}

export default Login;
