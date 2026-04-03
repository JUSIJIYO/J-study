import React,{useState, useContext } from 'react'
import { NameContext } from '../App'

function ToDo() {
    
    const [text, setText]=useState(''); //입력중인 아이
    const {names,setNames} = useContext(NameContext);

    const handleAddChange = (e) => {
        setText(e.target.value) 
    }
    
    const addClick= () => {
        setNames([...names, 
          { 
            text: text, 
            check: false
           }])
        setText('')
    }

    const deleteClick = (index) => {
      const DeleteNames=names.filter((_,i) => i !==index); //_: 현재 검사중인 글자 내용-> 지금은 인덱스 번호만 필요해서 무시하겠다, i: 인덱스(순서)
      //i !==index 내가 클릭한 번호랑 다른 인덱스만
      setNames(DeleteNames) // 남아있어라(사라질 애들만 사라지고 남은 친구들 화면에 그려주는거)
    }

    const handleCheck = (addIndex) => { 
        const updatedNames = names.map((item, index) => { 
            return index === addIndex 
            ? {...item, check: !item.check}  // 선택한 것만 check 반전
            : item 
        })
        setNames(updatedNames)
    }

  return (
    <>
      <h2>할일 목록</h2>
      <input type= "text" placeholder='새 할일' value={text}
      onChange={handleAddChange}/>
      <button onClick={addClick}>추가</button>
     
      <br />

      {names.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={item.check}
            onChange={() => handleCheck(index)} // 내가 선택한 요소만 체크되게
          />

          <span style={{
            textDecoration: item.check ? 'line-through' : 'none' // 체크하면 취소선
          }}>
            {item.text}
          </span>

          <button onClick={() => deleteClick(index)}>삭제</button>
        </div>
      ))}

       <br />

    </>
  )
}

export default ToDo