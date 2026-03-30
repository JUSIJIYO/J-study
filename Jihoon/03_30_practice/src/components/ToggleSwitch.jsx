import React, { useState } from "react";

function ToggleSwitch() {
  const [checkContent, setCheckContent] = useState(true);
  const [checkDarkMode, setCheckDarkMode] = useState(false);
  const [display, setDisplay] = useState("none");

  const handleCheckContent = (e) => {
    setCheckContent(e.target.checked);
  };

  const handleCheckDarkMode = (e) => {
    setCheckDarkMode(e.target.checked);
    setDisplay("block");
  };

  return (
    <>
      <input
        type="checkbox"
        checked={checkContent}
        onChange={handleCheckContent}
      />
      <label> 콘텐츠 표시 : {checkContent ? "켜짐" : "꺼짐"} </label> <br />
      <input
        type="checkbox"
        checked={checkDarkMode}
        onChange={handleCheckDarkMode}
      />
      <label>
        다크 모드 : {checkDarkMode ? "다크모드(달)" : "밝은모드(해)"}
      </label>
      <p style={{ display }}> 이 메시지는 조건부로 표시됩니다!</p>
    </>
  );
}

export default ToggleSwitch;
