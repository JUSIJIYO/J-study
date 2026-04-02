import React, { useState } from 'react'

function ItemChoice() {

    const [fruit, setFruit] = useState("없음");
    const [visible, setVisible] = useState(false);

    const handleFruit = (e) => {
        setFruit(e.target.value);
        setVisible(true);
    }
  return (
    <div>
        <button onClick={handleFruit}  value="사과"> 사과</button>
        <button onClick={handleFruit} value="바나나"> 바나나 </button>
        <button onClick={handleFruit} value="오렌지"> 오렌지 </button>
        <button onClick={handleFruit} value="포도"> 포도 </button>
        <button onClick={handleFruit} value="딸기"> 딸기 </button>

        <p> 선택된 과일 : {fruit} </p>

        <p> { visible && `🎉${fruit}를 선택하셨습니다.`}</p>
    </div>
  )
}

export default ItemChoice