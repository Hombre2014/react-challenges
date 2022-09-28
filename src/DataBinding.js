import React, { useState } from 'react';

const DataBinding = () => {
  const [value, setValue] = useState('');

  return (
    <div className='container'>
      <h2>Data Binding</h2>
      <input onChange={(e) => setValue(e.target.value)} type='text' placeholder='Enter text' value={value} />
      <p>{value}</p>
    </div>
  )
}

export default DataBinding;
