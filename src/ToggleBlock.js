import React, { useState } from 'react';

const ToggleBlock = () => {
  const [show, setShow] = useState('Hide block');

  const handleToggle = () => {
    const block = document.getElementById('block');
    block.classList.toggle('hidden');
    if(show === 'Hide block') {
      setShow('Show block');
    } else {
      setShow('Hide block');
    }
  }

  return (
    <div className='container'>
      <h1>ToggleBlock</h1>
      <button onClick={() => handleToggle()}>{show}</button>
      <div id='block' className=''>Toggle challenge</div>
    </div>
  )
}

export default ToggleBlock;
