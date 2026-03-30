import React, {useState} from 'react'

function Counter() {

    const [count, useCount] = useState('');

    const handleAddCount = () => {
        useCount(count-1);
    }

    const handleMinusCount = () => {
        useCount(count+1);
    }

    const handleResetCount = () => {
        useCount(0);
    }

  return (
    <>
        <p> 카운트 : {count} </p>

        <button onClick={handleMinusCount}>- 1</button>
        <button onClick={handleResetCount}>초기화</button>
        <button onClick={handleAddCount}>+ 1</button>
    </>
  )
}

export default Counter