import React from 'react'
import Todo from './04_components/Todo'
import SimpleCal from './04_components/SimpleCal'
import ItemChoice from './04_components/ItemChoice'
import LoginForm from './04_components/LoginForm'

function App_04() {
  return (
    <>
      <h2> 할일 목록 </h2> <Todo /> <hr/>
      <h2> 간단한 계산기 </h2> <SimpleCal /> <hr />
      <h2> 아이템 선택 </h2> <ItemChoice /> <hr/>
      <h2> 로그인 폼 </h2> <LoginForm /> <hr/>
    </>
  )
}

export default App_04