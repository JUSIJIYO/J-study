import Todo from './components/Todo';
import Calculator from './components/Calculator';
import Item from './components/Item';
import Login from './components/Login';

function App() {
  return (
    <>
      <h2>할 일 목록</h2>
      <Todo />
      <hr />
      <h2>간단한 계산기</h2>
      <Calculator />
      <hr />
      <h2>아이템 선택</h2>
      <Item />
      <hr />
      <h2>로그인 폼</h2>
      <Login />
    </>
  );
}

export default App;
