import React, { useState } from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { First } from 'react-bootstrap/esm/PageItem';
import { signInStart, signInSuccess, signInFailure } from '../../redux/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import OAuth from './OAuth';

function CreateAccountForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      email: email,
      password: password,
    };
  
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:3001/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));

      setEmail("");
      setPassword("");
      navigate('/Dashboard'); // Use navigate function to navigate to the desired route
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  
  return (
    <>
      <div className="formContainerSign">
         <div className="formHeader">
         <img src="pictures/VirtualLab Logo.png" alt='logo' />
          
        </div>    
        <div className="formCreateAccount">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
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
            <div className="formGroup">
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
            <p className="formRemember"><a href='#'>Forgot Password?</a></p>
            <Button disabled={loading} className="formBtn" as="input" type="submit" value={loading ? 'Loading...' : 'Sign In'} />
            <OAuth/>
          </form>
          <p className="formLast">
            Don't have an account? <Link to='/SignUp'>Sign Up</Link>
          </p>
        </div>
        <p>
          {error ? error.message || 'Something went wrong' : ''}</p>
      </div>
    </>
  );
}

export default CreateAccountForm;
