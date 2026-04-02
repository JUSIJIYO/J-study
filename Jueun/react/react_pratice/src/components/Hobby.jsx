import React, { useState } from "react";

function Hobby() {
  const [selectedHobby, setSelectedHobby] = useState([]);
  const onHandleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedHobby([...selectedHobby, value]);
    } else {
      setSelectedHobby(selectedHobby.filter((hobby) => hobby !== value));
    }
  };
  return (
    <>
      <input type="checkbox" value="reading" onChange={onHandleChange} />
      독서
      <br></br>
      <input type="checkbox" value="music" onChange={onHandleChange} />
      음악
      <br></br>
      <input type="checkbox" value="sport" onChange={onHandleChange} />
      운동
      <br></br>
      <input type="checkbox" value="coding" onChange={onHandleChange} />
      코딩
      <br></br>
      <h4>선택된 취미</h4>
      {selectedHobby.length === 0
        ? "없음"
        : selectedHobby.map((hobby, index) => (
            <span key={index}>{hobby} </span>
          ))}
    </>
  );
}

export default Hobby;
