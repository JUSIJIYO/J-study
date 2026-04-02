import React, { useState } from "react";

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        id="chk"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="chk">콘텐트 표시: {isChecked ? "켜짐" : "꺼짐"}</label>
      <br></br>

      <input
        type="checkbox"
        id="chk2"
        checked={isCheck}
        onChange={(e) => setIsCheck(e.target.checked)}
      />
      <label htmlFor="chk2">다크모드: {isCheck ? "O" : "X"}</label>
      <p> {isChecked ? "이 메시지는 조건부로 표시됩니다." : ""} </p>
    </>
  );
}

export default ToggleSwitch;
