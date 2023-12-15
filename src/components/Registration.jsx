import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 6;
  };

  const handleRegister = async () => {
    try {
      if (!isEmailValid(email)) {
        alert('Invalid email format');
        return;
      }

      if (!isPasswordValid(password)) {
        alert('Password should be at least 6 characters long');
        return;
      }

      const response = await axios.post('https://65780af9197926adf62f5daa.mockapi.io/auth', {
        name,
        email,
        password,
      });

      console.log('Registration successful:', response.data);
      alert('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error.message);
      alert('Registration failed');
    }
  };

  const handleLoginSwitch = () => {
    navigate('/login');
  }

  return (
    <section className='login-page'>
    <div className="circle">
      <p style={{ '--clr': '#ff3cae' }}></p>
      <p style={{ '--clr': '#00008d' }}></p>
      <p style={{ '--clr': '#40e2ff' }}></p>
      <div className="form">
        <h2>Registration</h2>
        <div className="box">
          <input type="text" value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="box">
          <input type="email" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="box">
          <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="box">
          <button className="submit" onClick={handleRegister}>Register</button>
        </div>
        <div className="links">
          <a href="#2.html">New User</a>
          <a href="#2.html" onClick={handleLoginSwitch}>Login</a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Register;