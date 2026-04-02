import React, { useState } from "react";

function Favorite() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFruit, setSelectedFruit] = useState('');
 
  const handleSelectChange = (e) => {
    setSelectedColor(e.target.value);
  };
  const handleSelectChanged = (e) => {
    setSelectedFruit(e.target.value);
  };
  
  return (
    <>
      좋아하는 색상:
      <select value={selectedColor} onChange={handleSelectChange}>
        <option>파란색</option>
        <option>빨간색</option>
        <option>초록색</option>
        <option>노란색</option>
      </select>
      <br></br>
      좋아하는 과일:
      <select value={selectedFruit} onChange={handleSelectChanged}>
        <option>사과</option>
        <option>바나나</option>
        <option>오렌지</option>
        <option>포도</option>
      </select>
      <p>선택한 색상: {selectedColor}</p>
      <p>선택한 과일: {selectedFruit}</p>
      
    </>
  );
}

export default Favorite;
