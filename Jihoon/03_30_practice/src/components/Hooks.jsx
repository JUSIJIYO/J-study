import { useEffect, useState } from "react";

function Hooks() {
  const [userPrompt, setUserPrompt] = useState('');
  const [value, setValue] = useState('');
  const [inputTime, setInputTime] = useState(null);

  useEffect(() => {
      const userAnswer = window.prompt("질문을 입력하세요");
      setUserPrompt(userAnswer);
      setInputTime(Date.now());
  }, [])

  const handleInputValue = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    
    if (inputValue === userPrompt) {
      alert(`${Date.now() - inputTime}ms`);
    }
  }
  return (
  <>
    <h1> {userPrompt} </h1>
    <input 
      type="text"
      name="user"
      value={value}
      onChange={handleInputValue}
    />
  </>
  )
}

export default Hooks;
