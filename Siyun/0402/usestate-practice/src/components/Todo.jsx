import { useState } from 'react';

function Todo() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (text === '') return;
    setList([...list, { text: text, done: false }]);
    setText('');
  };

  const toggle = (index) => {
    const newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
  };

  const remove = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="새 할일"
        value={text}
      />
      <button onClick={addTodo}>추가</button>

      <br />
      <br />

      {list.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggle(index)}
          />
          <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
            {item.text}
          </span>
          <button onClick={() => remove(index)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
