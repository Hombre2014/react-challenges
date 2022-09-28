import React, { useState } from 'react';

const DisabledButton = () => {
  const [value, setValue] = useState('');

  return (
    <div className='container'>
      <h2>Disabled Button</h2>
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
      <button className='mtop' type='button' disabled={value.length < 1}>Submit</button>
    </div>
  )
}

export default DisabledButton;
