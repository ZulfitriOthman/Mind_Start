import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');

  const submitLogin = () => {
    if (Name.trim() === '' || Password.trim() === '') {
      alert('Please enter a name and password');
      return;
    }

    axios.post('/login', {
      Name: Name,
      Password: Password,
    })
      .then(() => {
        alert('Successful login');
      })
      .catch((error) => {
        alert('Login failed');
      });
  };

  return (
    <div className="App">
      <h1>Login Form</h1>

      <div className='form'>
        <label>Name: </label>
        <input type='text' name='Name' onChange={(e)=> {
          setName(e.target.value);
        }} />

        <label>Password: </label>
        <input type='password' name='Password'  onChange={(e)=> {
          setPassword(e.target.value);
        }}/>

        <button onClick={submitLogin}>Submit</button>
      </div>
    </div>
  );
}

export default Login;