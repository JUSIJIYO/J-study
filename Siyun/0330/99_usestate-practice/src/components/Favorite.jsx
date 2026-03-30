import React, { useState } from 'react';

function Favorite() {
  const [selectedValue1, setSelectedValue1] = useState('');

  const handleSelectChange1 = (e) => {
    setSelectedValue1(e.target.value);
  };

  const [selectedValue2, setSelectedValue2] = useState('');

  const handleSelectChange2 = (e) => {
    setSelectedValue2(e.target.value);
  };

  return (
    <>
      <h4>
        좋아하는 색상 :
        <select value={selectedValue1} onChange={handleSelectChange1}>
          <option>빨간색</option>
          <option>파란색</option>
          <option>초록색</option>
          <option>노란색</option>
        </select>
      </h4>

      <h4>
        좋아하는 과일 :
        <select value={selectedValue2} onChange={handleSelectChange2}>
          <option>🍎사과</option>
          <option>🍌바나나</option>
          <option>🍊오렌지</option>
          <option>🍇포도</option>
        </select>
      </h4>

      <h4>선택한 색상 : {selectedValue1}</h4>
      <h4>선택한 과일 : {selectedValue2}</h4>
    </>
  );
}

export default Favorite;
