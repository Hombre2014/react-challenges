import React from 'react';

const Users = () => {
  const users = [
    { name: 'Joe Dow', id: 1 },
    { name: 'Mike Hike', id: 2 },
    { name: 'John Doe', id: 3 },
  ]

  return (
    <div className='container'>
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>{user.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Users;
