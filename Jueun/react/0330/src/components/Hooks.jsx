import { useState, useEffect} from "react";

function Hooks() {
  const [text, setText] = useState('text');

    const textChange = () => {
        setText(text);
    }
  
  useEffect(() => {
    prompt("문자열을 입력해주세요");
    <input type="text"/>;
  },[]);

  return(
  <>
  <h1>{text}</h1>
  </>
  )
}

export default Hooks;
