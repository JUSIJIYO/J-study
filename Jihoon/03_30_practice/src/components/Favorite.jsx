import React, { useState } from 'react'

function Favorite() {

    const [color, setColor] = useState("blue");
    const [fruit, setFruit] = useState("apple");

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const handleFruit = (e) => {
        setFruit(e.target.value);
    }

  return (
    <>
        <label> 좋아하는 색상 :</label>
        <select onChange={handleColor}>
            <option value="blue"> 파란색 </option>    
            <option value="red"> 빨간색 </option>    
            <option value="green"> 초록색 </option>    
            <option value="yellow"> 노란색 </option>    
        </select> 

        <label> 좋아하는 과일 </label>
        <select onChange={handleFruit} >
            <option value="apple"> 사과</option>
            <option value="banana"> 바나나</option>
            <option value="orange"> 오렌지</option>
            <option value="grape"> 포도</option>
        </select>

        <p> 선택한 색상 : {color} </p>
        <p> 선택한 과일 : {fruit} </p>
    </>
  )
}

export default Favorite