import React, { useState } from 'react';

function ToggleSwitch() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        id="chk1"
        checked={isChecked1}
        onChange={(e) => setIsChecked1(e.target.checked)}
      />
      <label htmlFor="chk1">콘텐츠 표시 : {isChecked1 ? '켜짐' : '꺼짐'}</label>

      <br />
      <input
        type="checkbox"
        id="chk2"
        checked={isChecked2}
        onChange={(e) => setIsChecked2(e.target.checked)}
      />
      <label htmlFor="chk2">다크모드 : {isChecked2 ? '🌙' : '🌞'}</label>

      {isChecked1 && <p>🎉 이 메시지는 조건부로 표시됩니다!</p>}
    </>
  );
}

export default ToggleSwitch;
