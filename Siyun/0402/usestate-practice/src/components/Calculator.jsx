import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('10');
  const [num2, setNum2] = useState('5');

  return (
    <>
      <div>
        {' '}
        숫자 1:{' '}
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>

      <div>
        {' '}
        숫자 2:{' '}
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <p>
        덧셈: {num1} + {num2} = {Number(num1) + Number(num2)}
      </p>
      <p>
        뺄셈: {num1} - {num2} = {num1 - num2}
      </p>
      <p>
        곱셈: {num1} × {num2} = {(num1 * num2).toFixed(2)}
        {/* toFixed(2) -> 소수점 둘째ㅈㅏ리까지 표시 해주는 함수 */}
      </p>
      <p>
        나눗셈: {num1} ÷ {num2} = {(num1 / num2).toFixed(2)}
      </p>
    </>
  );
}

export default Calculator;
