import React, { useState } from "react";
import "./CreateAccountForm.css";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../LoginCom/OAuth'

function CreateAccountForm() {
  const [Username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Stream, setStream] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({});

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const formData = {
      username: Username,
      email: email,
      Stream: Stream,
      password: password,
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }

      setUserName("");
      setEmail("");
      setStream("");
      setPassword("");
      setConfirmPassword("");
      setFormData({});
      navigate('/login');

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
          <a href="/">
            <img src="pictures/VirtualLab Logo.png" alt='logo' />
          </a>
        </div>

        <div className="create-account-form">
          <h2>Create an account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                name="username"
                placeholder="Username"
                value={Username}
                onChange={(event) => setUserName(event.target.value)}
                required
              />
            </div>
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
              <label>Stream:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="Stream"
                    value="Bio Science"
                    checked={Stream === "Bio Science"}
                    onChange={(event) => setStream(event.target.value)}
                  />
                  Bio Science
                </label>
                <label>
                  <input
                    type="radio"
                    name="Stream"
                    value="Physical Science"
                    checked={Stream === "Physical Science"}
                    onChange={(event) => setStream(event.target.value)}
                  />
                  Physical Science
                </label>
                <label>
                  <input
                    type="radio"
                    name="Stream"
                    value="E-technology"
                    checked={Stream === "E-technology"}
                    onChange={(event) => setStream(event.target.value)}
                  />
                  E-technology
                </label>
              </div>
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
            <div className="form-group">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </div>
            <Button disabled={loading} id="getnbtn" as="input" type="submit" value={loading ? 'Loading...' : 'Sign Up'} />
            <OAuth/>
          </form>
          <p id="last">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
        <p>{error && 'Something went wrong'}</p>
      </div>
    </>
  );
}

export default CreateAccountForm;
