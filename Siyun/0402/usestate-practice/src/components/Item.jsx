import { useState } from 'react';

function Item() {
  const [fruit, setFruit] = useState('');

  return (
    <>
      <button onClick={() => setFruit('🍎사과')}>사과</button>
      <button onClick={() => setFruit('🍌바나나')}>바나나</button>
      <button onClick={() => setFruit('🍊오렌지')}>오렌지</button>
      <button onClick={() => setFruit('🍇포도')}>포도</button>
      <button onClick={() => setFruit('🍓딸기')}>딸기</button>

      <p>선택된 과일: {fruit || '없음'}</p>
      {fruit && <p>🎉 {fruit}를 선택하셨습니다! </p>}
    </>
  );
}

export default Item;
