import React, { useState } from 'react';
import "./Login.css";



function Login() {
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');


  // try
  const [login, setLogin] = useState(false);
  const [Keyword, setKeyword] = useState('');


  const handleClick = () => {
      console.log('Button clicked!');
    };

  const toggleLogin = () => {
    setLogin(!login);
  };

  if(login) {
    document.body.classList.add('active-login')
  } else {
    document.body.classList.remove('active-login')
  }
  // 






  const submitLogin = () => {
    if (Name.trim() === '' || Password.trim() === '') {
      alert('Please enter a name and password');
      return;
    }


  };

  return (
    <div className="App">
      <br />
      <h1>Login Form</h1> <br />

      <div className='forms' style={{ border: '1px solid black', padding: '10px' }}>
        <br />
       
        <label>Name: </label>
        <input type='text' name='Name' onChange={(e)=> {
          setName(e.target.value);
        }} />

        <label>Password: </label>
        <input type='password' name='Password'  onChange={(e)=> {
          setPassword(e.target.value);
        }}/>  <br /> 

        <button onClick ={submitLogin} className='buttonlogin' >Submit</button>





        
          <button onClick={toggleLogin} className="btn-login">
            Sign in for admin
          </button>
        
          {login && (
            <div className="login">
              <div onClick={toggleLogin} className="overlay"></div>
              <div className="login-content">
                <h2>Admin</h2>
                
        <label>Keyword: </label>
        <input type='password' name='Keyword' className="main" onChange={(e)=> {
          setKeyword(e.target.value);
        }}/>  <br /> 
                <button className="close-login" onClick={toggleLogin}>
                  CLOSE
                </button>
                <button className="next-page" onClick={handleClick}>Entry</button>
                
              </div>
            </div>
          )}
         
        
    






    
        <br></br>
        <p>
            Haven't Register?<br />
              <span className="line">
              {/*put router link here*/}
            <a href="#">Sign up</a>
       </span>
                    </p>
      </div>
    </div>
  );
}

export default Login;