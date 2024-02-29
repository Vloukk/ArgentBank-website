import React, { useState, useEffect } from 'react';

import { login } from '../../redux/actions/authAction';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(email, password));
    } catch (error) {
    }
  };

  useEffect(() => {
    if (token) {
      // Rediriger l'utilisateur vers une page après la connexion réussie
      navigate('/profil');
    }
  }, [navigate, token]);
  

  return (
    <div className='login bg-dark'>
      <Header />
      <div className='sign-in__content'>
        <FontAwesomeIcon icon={faUserCircle} className='user-icon'/>
        <h1 className='sign-in__title'>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='input__wrapper'>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="current-text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='input__wrapper'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="input__remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in__button">Sign In</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
