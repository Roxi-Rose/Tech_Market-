import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <section className='login-page'>
    <div className="circle">
      <p style={{ '--clr': '#ff3cae' }}></p>
      <p style={{ '--clr': '#00008d' }}></p>
      <p style={{ '--clr': '#40e2ff' }}></p>
      <div className="form">
        <h2>Login</h2>
        <div className="box">
          <input type="text" placeholder="Username or email..." />
        </div>
        <div className="box">
          <input type="password" placeholder="Password..." />
        </div>
        <div className="box">
          <button className="submit">Submit</button>
        </div>
        <div className="links">
          <a href="#2.html">Forget Password ?</a>
          <a href="#2.html">Sign-up</a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Login;