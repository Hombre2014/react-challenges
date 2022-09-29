import React, { useState } from 'react';

const AddTwoNumbers = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const addTwoNumbers = () => {
    setResult(Number(num1) + Number(num2));
  }

  return (
    <div className='container'>
      <h2>Add Two Numbers</h2>
      <input type='number' placeholder='First number' onChange={(e) => setNum1(e.target.value)} />
      <input className='mtop' type='number' placeholder='Second number' onChange={(e) => setNum2(e.target.value)} />
      <button type='button' onClick={() => addTwoNumbers()}>Add Two numbers</button>
      <p>Total: {result || ''}</p>
    </div>
  )
}

export default AddTwoNumbers;
