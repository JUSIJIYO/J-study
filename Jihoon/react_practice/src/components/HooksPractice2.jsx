

import { useEffect, useState, useReducer } from "react";

function promptReducer2(state, action) {
    switch(action.type) {
        case "TIME" :
            return { 
            ...state,
            time : Date.now()
            }
        case "UNVISIBLE" :
            return {
              ...state,
              visible : false
            }
        case "PROMPT" :
            return {
              ...state,
              promptValue : action.payload
            }
        case "INPUT" :
            return {
              ...state,
              inputValue : action.payload
            }
        default :
            return {
              state
            }
    }
}


function HooksPractice2() {
  const[prm, dispatch] = useReducer(promptReducer2, {promptValue : "", inputValue : "", time : 0, visible:true})

  useEffect(() => {
    const userPrompt = prompt("질문을 입력하세요");

    if(!userPrompt) {
        // setDisplay('none');
        dispatch({type : "UNVISIBLE"});
        return;
    }
    
    dispatch({type : "PROMPT", payload : userPrompt});
    dispatch({type : "TIME"});

  }, []);

  const handleInputValue = (e) => {
    dispatch({type : "INPUT", payload : e.target.value});
  }

  const hanldeEnter = (e) => {
    if(e.key == 'Enter' && prm.inputValue === prm.promptValue) {;
        alert(`${Date.now() - prm.time}ms`);
        dispatch({type : "UNVISIBLE"});
    }
  }

  if(!prm.visible) { return null;}

  return (
    <>
      <h2> {prm.promptValue} </h2>
      <input type="text" 
    //   style={{ display }}
      value={prm.inputValue} 
      onKeyDown={hanldeEnter}
      onChange={handleInputValue} />
    </>
  );
}

export default HooksPractice2;
