import React from 'react';
import '../components/loginForm.css';

const LoginForm = () => {
  return (

    <>
    <div className='login-main-container'>
      <div className="form-container">
      <h2>Admin</h2>
        <h2 className="form-title">Welcome back!</h2>
        <input type="email" placeholder="Enter your email" className="form-input" />
        <input type="password" placeholder="Enter your password" className="form-input" />
        <button className="form-button">Login</button>
      </div>
    </div>
    
    </>
  );
};

export default LoginForm;
