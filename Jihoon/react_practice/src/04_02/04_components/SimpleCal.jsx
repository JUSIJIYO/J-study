import React, { useState } from 'react'

function SimpleCal() {

    const [inputValue, setInputValue] = useState({
        number1 : 0,
        number2 : 0
    });

    const handleInputValue = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.id] : e.target.value
            
        })
    }
  
    return (
    <div>
        <label> 숫자 1: </label>
        <input 
            type="number"
            id="number1"
            value={inputValue.number1}
            onChange={handleInputValue}
        />

        <br/>

        <label> 숫자 2: </label>
        <input 
            type="number"
            id="number2"    
            value={inputValue.number2}
            onChange={handleInputValue}
        />

        <p> 덧셈 : {inputValue.number1} + {inputValue.number2} = {Number(inputValue.number1) + Number(inputValue.number2)}</p>
        <p> 뺄셈 : {inputValue.number1} - {inputValue.number2} = {Number(inputValue.number1) - Number(inputValue.number2)}</p>
        <p> 곱셈 : {inputValue.number1} x {inputValue.number2} = {(Number(inputValue.number1) * Number(inputValue.number2)).toFixed(2)}</p>
        <p> 나눗셈 : {inputValue.number1} ÷ {inputValue.number2} = {(Number(inputValue.number1)/ Number(inputValue.number2)).toFixed(2)}</p>
    </div>
  )
}

export default SimpleCal