import React, { useState } from "react";

function Hobby() {
  const [selectHobby, setSelectHobby] = useState({
    isReading: false,
    isMusic: false,
    isSports: true,
    isCoding: false,
  });

  const [hobbyValue, setHobbyValue] = useState(["sports"]);

  const handleHobbyValue = (e) => {
    setSelectHobby({
      ...selectHobby,
      [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
      setHobbyValue([...hobbyValue, e.target.value]);
    } else {
      setHobbyValue(hobbyValue.filter((hobby) => hobby !== e.target.value));
    }
  };
  return (
    <>
      <input
        type="checkbox"
        checked={selectHobby.isReading}
        value="read"
        name="isReading"
        onChange={handleHobbyValue}
      />
      <label> 독서</label> <br />
      <input
        type="checkbox"
        checked={selectHobby.isMusic}
        value="music"
        name="isMusic"
        onChange={handleHobbyValue}
      />
      <label> 음악</label> <br />
      <input
        type="checkbox"
        checked={selectHobby.isSports}
        value="sports"
        name="isSports"
        onChange={handleHobbyValue}
      />
      <label> 운동</label> <br />
      <input
        type="checkbox"
        checked={selectHobby.isCoding}
        value="coding"
        name="isCoding"
        onChange={handleHobbyValue}
      />
      <label> 코딩</label>
      <p> 선택된 취미 </p>
      <p> {hobbyValue.join(', ')} </p>
    </>
  );
}

export default Hobby;
