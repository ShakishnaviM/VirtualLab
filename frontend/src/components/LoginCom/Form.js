import React, { useState } from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { First } from 'react-bootstrap/esm/PageItem';

function CreateAccountForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Move useNavigate hook outside of the handleSubmit function

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      email: email,
      password: password,
    };
  
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3001/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
  
      setEmail("");
      setPassword("");
      navigate('/Dashboard'); // Use navigate function to navigate to the desired route
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error("Error submitting form:", error);
    }
  };
  
  return (
    <>
      <div className="containerSign">
        <div className="header">
          <img src='' alt="Logo" />
        </div>    
        <div className="create-account-form">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <input type="checkbox" value={First} /> Remember Me
            <p className='Remember'><a href='#'>Forgot Password?</a></p>
            <Button disabled={loading}  id='getnbtn' as="input" type="submit" value={loading ? 'loading': 'Sign In'} />
          </form>
          <p id='last'>
            Don't have an account? <Link to='/SignUp'>Sign Up</Link>
          </p>
        </div>
        <p>{error && 'Something went wrong'}</p>
      </div>
    </>
  );
}

export default CreateAccountForm;
