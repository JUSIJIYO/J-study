import React,{useState} from 'react'

function ItemSelect() {
    const [fruit, setFruit]=useState('없음')

  return (
    <>
    <h2>아이템 선택</h2>
      <button onClick={() => setFruit('사과')}>사과</button>
      <button onClick={() => setFruit('바나나')}>바나나</button>
      <button onClick={() => setFruit('오렌지')}>오렌지</button>
      <button onClick={() => setFruit('포도')}>포도</button>
      <button onClick={() => setFruit('딸기')}>딸기</button>
    <br/>

      선택된 과일: {fruit}
      {fruit !=='없음' && 
      <p>{fruit}를 선택하셨습니다!</p>}
    </>
  )
}

export default ItemSelect
