import React,{useState, useContext } from 'react'
import { NameContext } from '../App'

function ToDo() {
    
    const [text, setText]=useState(''); //입력중인 아이
    
    const {names,setNames} = useContext(NameContext);

    const handleAddChange = (e) => {
        setText(e.target.value) 
    }
    
    const addClick= () => {
        setNames([...names, text])
        setText('')
    }

    const deleteClick = () => {

    }

  return (
    <>
      <h2>할일 목록</h2>
      <input type= "text" placeholder='새 할일' value={text}
      onChange={handleAddChange}/>
      <button onClick={addClick}>추가</button>
     
      <br />

        {names.map((name,index) => (
           <div 
           key={index}>
            <input type="checkbox"/> {name}
            <button onClick={()=>deleteClick(index)}>삭제</button>
           </div>
    
        ))}

  
       <br />

    </>
  )
}

export default ToDo
