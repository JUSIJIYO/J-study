import React, { useState } from 'react';

function Hobby() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  const selectedHobbies = [];

  if (isChecked1) selectedHobbies.push('reading');
  if (isChecked2) selectedHobbies.push('music');
  if (isChecked3) selectedHobbies.push('sports');
  if (isChecked4) selectedHobbies.push('coding');

  return (
    <>
      <input
        type="checkbox"
        id="chk1"
        checked={isChecked1}
        onChange={(e) => setIsChecked1(e.target.checked)}
      />
      <span>📚독서</span>
      <br />
      <input
        type="checkbox"
        id="chk2"
        checked={isChecked2}
        onChange={(e) => setIsChecked2(e.target.checked)}
      />
      <span>🎵음악</span>
      <br />

      <input
        type="checkbox"
        id="chk3"
        checked={isChecked3}
        onChange={(e) => setIsChecked3(e.target.checked)}
      />
      <span>🏋🏻운동</span>
      <br />

      <input
        type="checkbox"
        id="chk4"
        checked={isChecked4}
        onChange={(e) => setIsChecked4(e.target.checked)}
      />
      <span>🧑🏻‍💻코딩</span>

      <h2>선택된 취미</h2>
      <h4>{selectedHobbies.join(', ')}</h4>
    </>
  );
}

export default Hobby;
