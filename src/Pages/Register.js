import React, { useState } from 'react';
import Axios from 'axios';

const Register = () => {

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ConfirmationPassword, setConfirmationPassword] = useState('')



  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  
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


 
      
      <div class="jumbotron">
        
       

      <div className="App">
      <div className='form' style={{ border: '1px solid black', padding: '10px' }}>
        <br />
        <h1>Register Form</h1>
  
        <div className='forms'>

          <span>
          <label>Name: </label>
          <input type='text' name='Name' onChange= {(e)=> {
          setName(e.target.value)
          }} />
          </span>
          
          <span>
          <label>Email: </label>
          <input type='text' name='Email'  onChange={(e)=> {
          setEmail(e.target.value) 
          }}/>
          </span>

          <span>
          <label>Password: </label>
          <input type='text' name='Password'  onChange={(e)=> {
          setPassword(e.target.value) 
          }}/>
          </span>

          <span>
          <label>Confirmation <br></br> Password: </label>
          <input type='text' name='ConfirmationPassword'  onChange={(e)=> {
          setConfirmationPassword(e.target.value) }}/>
          </span>

          <span>
          <label htmlFor="selection-input">Department:</label>
      <select id="selection-input" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Which Department are you</option>
        <option value="option1">Sales Department</option>
        <option value="option2">Finance Department</option>
        <option value="option3">HR Department</option>
      </select>
      </span>
      





          <button onClick={submitRegister}>Submit</button>
        </div>
        </div>
      </div>
      </div>
    );
  }


export default Register;