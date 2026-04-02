import React, { useState } from 'react'

function Todo() {

    const [inputValue, setInputValue] = useState("");
    const [newTodo, setNewTodo] = useState([]);
    const [checkd, setCheck] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        setNewTodo([
            ...newTodo,
            {title : inputValue, check : checkd}

        ])
    }

  return (
    <>
        <input 
            type="text"
            placeholder='새 할일'
            value={inputValue}
            onChange={handleChange}
        />

        <button onClick={handleClick}> 추가 </button>
        {newTodo.map((item) => (
            <>
                <br/>
                <input type='checkbox' checked={item.check} onChange={() => setCheck(!checkd)} />
                <label> {item.title} </label>
                <button> 삭제 </button>
            </>
        ))}


    </>
  )
}

export default Todo