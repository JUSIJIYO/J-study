import React,{useState} from 'react'

function Carculator() {

    const [text,setText]=useState('')
    const [num,setNum]=useState('')

    const handleChange = (e) =>{
        setText(Number(e.target.value))
    }

    const handleChanged = (e) =>{
        setNum(Number(e.target.value))
    }
    return (
    <>
      <h2>간단한 계산기</h2>

      숫자 1: <input type="text" value={text} onChange={handleChange}/><br/>
      숫자 2: <input type="text" value={num} onChange={handleChanged}/><br/>
      덧셈: {text}+{num} = {text+num}<br/>
      뺄셈: {text}-{num} = {text-num}<br/>
      곱셉: {text}x{num} = {text*num}<br/>
      나눗셈: {text}÷{num} = {text/num}<br/>
    </>
  )
}

export default Carculator
