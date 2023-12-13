import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://65780af9197926adf62f5daa.mockapi.io/auth', {
        params: {
          email,
        },
      });

      const user = response.data.find((u) => u.email === email);

      if (user) {
        if (user.password === password) {
          alert('Login successful');
        } else {
          alert('Login failed: Incorrect password');
        }
      } else {
        alert('Login failed: User not found');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  const handlRegistrationSwitch = () => {
    navigate('/register');
  }

  return (
    <section className='login-page'>
    <div className="circle">
      <p style={{ '--clr': '#ff3cae' }}></p>
      <p style={{ '--clr': '#00008d' }}></p>
      <p style={{ '--clr': '#40e2ff' }}></p>
      <div className="form">
        <h2>Login</h2>
        <div className="box">
          <input type="email" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="box">
          <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="box">
          <button className="submit" onClick={handleLogin}>Login</button>
        </div>
        <div className="links">
          <a href="#2.html">Forget Password ?</a>
          <a href="#2.html" onClick={handlRegistrationSwitch}>Register</a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Login;