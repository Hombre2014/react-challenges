import React, { useState } from 'react';

const Counter = (number) => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount(JSON.parse(window.localStorage.getItem('counter_value')));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('counter_value', count);
  // }, [count]);

  const handleChange = (e) => {
    console.log('Value: ', e.target.value)
    if(e.target.value === '+') {
      setCount(count + number);
    } else if(e.target.value === '-') {
      setCount(count - number);
    }
  }

  return (
    <div className='container'>
      <h1>Counter</h1>
      <div className='counter'>
        <span>{count}</span>
        <button type='submit' onClick={(e) => handleChange(e)} value={'+'}>+</button>
        <button type='submit' onClick={(e) => handleChange(e)} value={'-'}>-</button>
      </div>
    </div>
  )
}

export default Counter;
