import { useEffect, useState, useReducer } from "react";

function HooksPractice() {
  const [promptValue, setpromptValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState(0);
//   const [display, setDisplay] = useState('block');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const userPrompt = prompt("질문을 입력하세요");

    if(!userPrompt) {
        // setDisplay('none');
        setVisible(false);
        return;
    }
    
    setpromptValue(userPrompt);
    setTime(Date.now());

  }, []);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const hanldeEnter = (e) => {
    if(e.key == 'Enter' && inputValue === promptValue) {;
        alert(`${Date.now() - time}ms`);
        setpromptValue("");
        // setDisplay('none');
        setVisible(false);
    }
  }

  if(!visible) { return null;}

  return (
    <>
      <h2> {promptValue} </h2>
      <input type="text" 
    //   style={{ display }}
      value={inputValue} 
      onKeyDown={hanldeEnter}
      onChange={handleInputValue} />
    </>
  );
}

export default HooksPractice;
