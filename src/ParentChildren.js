import React from 'react';

const ParentChildren = ({ children }) => {
  return (
    <div className='container'>
      <h2>Parent Component with children props</h2>
      {children}
    </div>
  )
}

export default ParentChildren;
