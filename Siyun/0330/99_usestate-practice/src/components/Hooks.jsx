import { useEffect, useState } from 'react';

function Hooks() {
  const [targetText, setTargetText] = useState('');
  const [inputText, setInputText] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const input = prompt('문자열을 입력해주세요');
    setTargetText(input);
    setTime(Date.now());
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);

    if (value == targetText && targetText == '') {
      const endTime = Date.now();
      const result = endTime - time;
      alert(result + '(ms)');
      // setInputText('');
      // setTargetText('');
      return;
    }
  };
  return (
    <>
      <h2>{targetText}</h2>
      <input type="text" value={inputText} onChange={handleChange} />
    </>
  );
}

export default Hooks;
