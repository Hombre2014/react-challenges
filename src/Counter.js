import React, { useState, useEffect } from 'react';

const Counter = ({ number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('counter_value')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('counter_value', count);
  }, [count]);

  const handleChange = (e) => {
    console.log('Value: ', e.target.value);
    console.log('Number in Counter: ', number);
    if(e.target.value === '+') {
      setCount(count + parseInt(number));
    } else if(e.target.value === '-') {
      setCount(count - parseInt(number));
    }
  }

  return (
    <div className='container'>
      <h2>Counter</h2>
      <div className='counter'>
        <span>{count}</span>
        <button type='submit' onClick={(e) => handleChange(e)} value={'+'}>+</button>
        <button type='submit' onClick={(e) => handleChange(e)} value={'-'}>-</button>
      </div>
    </div>
  )
}

export default Counter;
