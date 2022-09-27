import React, { useState, useEffect } from 'react';
import Counter from './Counter';

const IncrementWith = () => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    setNumber(JSON.parse(window.localStorage.getItem('increment_with_value')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('increment_with_value', number);
  }, [number]);

  // const handleIncrement = (e) => {
  //   setNumber(parseInt(e.target.value));
  //   console.log('Number: ', number);
  // }

  return (
    <div className='container'>
      <Counter number={number} />
      <div>
        <h1 id='title'>Increment With</h1>
        <input type='number' id='increment' value={number} onChange={(e) => setNumber(e.target.value)} />
        {/* <button type='submit' onClick={(e) => handleIncrement(e)}>Add increment With</button> */}
      </div>
    </div>
  )
}

export default IncrementWith;
