import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import './login.css';
import Cookies from "js-cookie";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const handleInputChange = (event, key) => {
    setUser(prev => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const handleInputLoginChange = (event, key) => {
    setLoginUser(prev => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleLoginClick = () => {
    setIsSignUp(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginUser;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Login success!");
        navigate("/");
      })
      .catch((error) => {
        alert("Login Fail");
      });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Register success. Redirect to login...");
        navigate("/login");
      })
      .catch((error) => {
        // Handle registration error
      });
  };

  return (
    <div className='app'>
      <div className={`cont ${isSignUp ? 's-signup' : ''}`}>
        <div className="form sign-in">
          <h2>Sign In</h2>
          <form onSubmit={handleLoginSubmit}>
            <label>
              <span>Email Address</span>
              <input
                value={loginUser.email}
                onChange={(e) => handleInputLoginChange(e, "email")}
                type="email" name="email" required />
            </label>
            <label>
              <span>Password</span>
              <input
                value={loginUser.password}
                onChange={(e) => handleInputLoginChange(e, "password")}
                type="password" name="password" required />
            </label>
            <button className="submit" type="submit">Sign In</button>
          </form>
          <p className="forgot-pass">Forgot Password ?</p>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img-text m-up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img-text m-in">
              <h2>One of us?</h2>
              <p>If you already have an account, just sign in. We've missed you!</p>
            </div>
            <div className="img-btn" onClick={isSignUp ? handleLoginClick : handleSignUpClick}>
              <span className={isSignUp ? 'm-in' : 'm-up'}>{isSignUp ? 'Sign In' : 'Sign Up'}</span>
            </div>
          </div>
          <div className="form sign-up">
            <form onSubmit={handleRegistrationSubmit}>
              <h2>Sign Up</h2>
              <label>
                <span>Name</span>
                <input
                  value={user.fullName}
                  onChange={(e) => handleInputChange(e, "fullName")}
                  type="text" required />
              </label>
              <label>
                <span>Email</span>
                <input
                  value={user.email}
                  onChange={(e) => handleInputChange(e, "email")}
                  type="email" required />
              </label>
              <label>
                <span>Password</span>
                <input
                  value={user.password}
                  onChange={(e) => handleInputChange(e, "password")}
                  type="password" required />
              </label>
              <button type="submit" className="submit">Sign Up Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
