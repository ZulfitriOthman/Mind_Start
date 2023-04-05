import React, { useState } from 'react';
import Axios from 'axios';

function Register() {

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ConfirmationPassword, setConfirmationPassword] = useState('')




  
    // Link to the backend


    const submitRegister = () => {
      if (Password !== ConfirmationPassword) {
        alert("Passwords do not match");
        return;
      }
      
      Axios.post ('http://localhost:3001/register/insert', {
        Name: Name, 
        Email: Email, 
        Password: Password,
        ConfirmationPassword: ConfirmationPassword,
        
      }).then(() => {
        alert('successful insert');
      });
    }









    






    return (
      <div className="App">
        <h1>Register Form</h1>
  
        <div className='form'>
          <label>Name: </label>
          <input type='text' name='Name' onChange= {(e)=> {
          setName(e.target.value)
          }} />
          <label>Email: </label>
          <input type='text' name='Email'  onChange={(e)=> {
          setEmail(e.target.value) 
          }}/>
          <label>Password: </label>
          <input type='text' name='Password'  onChange={(e)=> {
          setPassword(e.target.value) 
          }}/>
          <label>Confirmation Password: </label>
          <input type='text' name='ConfirmationPassword'  onChange={(e)=> {
          setConfirmationPassword(e.target.value) }}/>
      
          <button onClick={submitRegister}>Submit</button>
        </div>
      </div>
    );
  }


export default Register;