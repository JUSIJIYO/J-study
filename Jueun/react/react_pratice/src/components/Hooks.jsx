import { useState, useEffect} from "react";

function Hooks() {
  const [text, setText] = useState('');
  const [value, setValue]=useState('');
  const [inputTime,setInputTime]=useState(null);
    
  useEffect(() => {
    const userInput=prompt("문자열을 입력해주세요");
    setText(userInput);
    setInputTime(Date.now());
  },[]);

    const handleChange = (e) =>{
      const userValue=e.target.value;
      setValue(userValue);
      if(userValue===text){
      alert(`${Date.now() - inputTime}ms`);
    }
    }

    
  return(
  <>
  <h1> {text} </h1> 
  <input type="text" name="user" value={value} onChange={handleChange} />
  </>
  )
}

export default Hooks;
