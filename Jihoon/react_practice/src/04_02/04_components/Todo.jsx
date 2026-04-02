import React, { useState } from 'react'

function Todo() {

    const [inputValue, setInputValue] = useState("");
    const [newTodo, setNewTodo] = useState([]);
    /* state로 관리하려 했지만 map으로 만들어지는 모든 함수에 적용되어 실패 (아래는 실패한 후 주석처리한 함수)
    const [checkd, setCheck] = useState(false); */

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        setNewTodo([
            ...newTodo,
            // {title : inputValue, check : checkd} 기존 useState로 관리하던 부분 주석처리
            {title : inputValue, check : false} // state관리가 아닌 setNewTodo 배열 안에서 관리 + 추가 버튼을 누르면 newTodo 배열에 { } 안에 있는 내용이 추가되게 설정

            /* 코드 설명 
            [...newTodo, {title : inputValue, check : false} ] -> 전개 연산자로 펼치고 뒤에 보이는 title, check 값을 새롭게 추가한다.
            
            코드를 이렇게 작성한 이유
            1. todo는 추가 버튼을 누르면 사용자가 입력한 값이 화면에 체크박스/제목/삭제버튼 순으로 나오게 됨
            2. 처음 useState를 만들 때 useState([]) <- 이런식으로 빈 배열을 만들지 않으면 화면이 렌더링 되는 순간 todo에 기본값이 들어가기 때문에 빈 배열로 작성해야함
            */

        ]);
        setInputValue("");
    }
    
    /* 코드 설명 */
    const handleCheck = (addIndex) => { // addIndex는 아래 map을 통해 전달한 index값을 가져옴
        setNewTodo(newTodo.map((item, index) => { // newTodo를 map을 통해 한번씩 순회하도록 설정
            return index === addIndex ? {...item, check: !item.check} : item 
            /* 코드 설명 
            1. 아래 map을 통해 생성된 index값과 newTodo.map을 통해 생성된 index 값을 비교해서 일치한다면 checkbox의 check를 전환한다.
            2. 일치하지 않는다면 item을 반환 즉 값을 변화시키지 않는다.
            3. 아래서 작성한 map과 여기에서 작성한 map은 모두 newTodo를 기반으로 작성하였기 떄문에 index값은 서로 달라지지 않는다.
            4. 그렇기 때문에 index 값이 일치한다면 check 표시를 반전시키고 일치하지 않는다면 코드 그대로 반환할 수 있게 하기 때문에 여러개의 todo가 생겨도 내가 선택한 요소만 check가 되게 된다. 
            */
        }))
    }

    /* 코드 설명 
    1. 위에 handleCheck와 똑같이 index값을 비교한다. 다만 fileter를 통해서 조건에 맞는 값만 모아 새로 배열을 만든다.
    2. !== 연산자를 작성하여 index가 일치하지 않는 객체만 반환하여 index가 일치하는 객체는 배열에서 사라져 화면에 나타나지 않게 된다.
    */
    const handleRemove = (addIndex) => {
        setNewTodo(newTodo.filter((item, index)=> {
            return index !== addIndex
        }))
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
        {newTodo.map((item, index) => (
            <div key={index}>
                <br/>
                <input type='checkbox' checked={item.check} onChange={() => handleCheck(index)} /> {/* 이벤트가 발생하면 실행되게 해야 하므로 콜백함수로 전달 (콜백함수로 전달하지 않을시 즉시 실행)  */}
                <label>{item.check === true ? <strike>{item.title}</strike> : item.title } </label> {/* check 표시 되어있을 떄만 취소선 그어지게 삼항 연산자로 설정 */}
                <button onClick={() => handleRemove(index)}> 삭제 </button>
            </div>
            
        ))}


    </>
  )
}

export default Todo