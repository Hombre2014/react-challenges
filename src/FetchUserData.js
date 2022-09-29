import React, { useState, useEffect } from 'react';

const FetchUserData = () => {
  const [user, setUser] = useState({});

  const getUserData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const jsonData = await response.json();
    setUser(jsonData);
    console.log(jsonData);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className='container'>
      <h2>Fetch User Data</h2>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  )
}

export default FetchUserData;
