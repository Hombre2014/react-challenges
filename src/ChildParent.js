import React, { useState } from 'react';

function Child({ setValue }) {
  return (
    <>
      <div>Child</div>
      <button onClick={() => setValue('Parent has been updated')}>
        Change Parent Value
      </button>
    </>
  );
}

function Parent() {
  const [value, setValue] = useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>
      <div className="wrapper">
        <Child setValue={setValue} />
      </div>
    </>
  );
}

const ChildParent = () => {
  return (
    <div className='container'>
      <h2>ChildParent</h2>
        <Parent />
    </div>
  )
}

export default ChildParent;
